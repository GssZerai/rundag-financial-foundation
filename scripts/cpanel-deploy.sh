#!/bin/sh
# cpanel-deploy.sh
# Usage:
#   From cPanel Terminal or SSH:
#     sh scripts/cpanel-deploy.sh /home/GssZerai/public_html
#   Or just run: sh scripts/cpanel-deploy.sh
# This script assumes your repo root contains package.json and build script creates a folder like 'build' or 'dist'.
set -e

USER_HOME="/home/GssZerai"
TARGET="${1:-$USER_HOME/public_html}"        # default to /home/GssZerai/public_html
GIT_DIR="${2:-}"                             # optional bare repo path for checkout

echo "Deploy started: $(date)"
echo "Target: $TARGET"

if [ -n "$GIT_DIR" ]; then
  echo "Checking out latest from $GIT_DIR to $TARGET"
  git --work-tree="$TARGET" --git-dir="$GIT_DIR" checkout -f
fi

cd "$TARGET" || { echo "Target not found: $TARGET"; exit 1; }

# Install dependencies (prefer lockfile)
if [ -f package-lock.json ] || [ -f npm-shrinkwrap.json ]; then
  echo "Using npm ci"
  npm ci --no-audit --no-fund
elif [ -f yarn.lock ] && command -v yarn >/dev/null 2>&1; then
  echo "Using yarn install"
  yarn install --silent
else
  echo "Using npm install"
  npm install --no-audit --no-fund
fi

# Run build if defined
if npm run | grep -q " build"; then
  echo "Running npm run build"
  npm run build
else
  echo "No build script found in package.json, skipping build step"
fi

# If build output lands in a folder like build/ or dist/, optionally move it into docroot:
# Uncomment and edit the line below if your build outputs to 'build' or 'dist' and you want that served directly.
# BUILD_DIR="build" && [ -d "$BUILD_DIR" ] && rsync -a --delete "$BUILD_DIR"/ "$TARGET"/

# Fix permissions (common cPanel-friendly defaults)
find "$TARGET" -type d -exec chmod 755 {} \;
find "$TARGET" -type f -exec chmod 644 {} \;

echo "Deploy finished: $(date)"