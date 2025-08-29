#!/bin/bash
set -euo pipefail

# deploy.sh
# Usage: ./deploy.sh [branch]
# - Place this script in the root of your cloned repository on the cPanel server.
# - Run from the repo directory: chmod +x deploy.sh && ./deploy.sh main
# The script does a git reset to origin/branch, runs npm build if available,
# detects common static output folders (build, dist, out) and copies their
# contents into the repo root while excluding .git and node_modules.

WORKDIR="$(cd ""$(dirname "$0")" && pwd)"
BRANCH=""${1:-main}"

echo "Starting deploy in $WORKDIR (branch: $BRANCH)"
cd "$WORKDIR" || { echo "Cannot cd to $WORKDIR"; exit 1; }

echo "Fetching latest..."
git fetch --all --prune

echo "Resetting to origin/$BRANCH..."
git reset --hard "origin/$BRANCH"

# Install and build if npm is available
if command -v npm >/dev/null 2>&1; then
  echo "Installing dependencies (npm)..."
  npm ci --production || npm install --production
  echo "Running build..."
  npm run build || { echo "npm run build failed"; exit 1; }
else
  echo "Warning: npm not found in PATH. If you cannot run npm on the server, build locally and upload the build output."i

# Detect build output folder
OUT_DIR=""
for d in build dist out; do
  if [ -d "$WORKDIR/$d" ]; then
    OUT_DIR="$d"
    break
  fi
done

if [ -z "$OUT_DIR" ]; then
  if [ -f "$WORKDIR/index.html" ]; then
    echo "No build folder found but index.html exists in repo root; nothing to copy."
    echo "Deploy finished (static repo)."
    exit 0
  fi
  echo "No build output found (checked: build, dist, out)."
  echo "If this is a static repo (already contains index.html), nothing to copy. Exiting."
  exit 1
fi

echo "Found build output: $OUT_DIR"

# Prepare a temporary directory then sync into place (exclude .git etc.)
TMPDIR=$(mktemp -d)
echo "Copying build files to temporary dir..."
rsync -a --delete "$WORKDIR/$OUT_DIR/" "$TMPDIR/"

echo "Syncing build -> $WORKDIR (excluding .git, node_modules, deploy.sh)..."
rsync -a --delete --exclude='.git' --exclude='node_modules' --exclude='deploy.sh' "$TMPDIR/" "$WORKDIR/"

rm -rf "$TMPDIR"

# Set safe permissions for files and directories
find "$WORKDIR" -type d -exec chmod 755 {} \; >/dev/null 2>&1 || true
find "$WORKDIR" -type f -exec chmod 644 {} \; >/dev/null 2>&1 || true

echo "Deploy complete. Visit your site to verify."