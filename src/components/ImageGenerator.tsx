import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ImageGeneratorProps {
  onImageGenerated?: (imageUrl: string) => void;
}

const ImageGenerator = ({ onImageGenerated }: ImageGeneratorProps) => {
  const [prompt, setPrompt] = useState("Professional Ethiopian business person with modern professional hairstyle, wearing business attire, confident pose, studio lighting, high quality corporate headshot");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-professional-image', {
        body: { prompt }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(error.message || 'Failed to generate image');
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const imageDataUrl = `data:image/webp;base64,${data.imageData}`;
      setGeneratedImage(imageDataUrl);
      
      if (onImageGenerated) {
        onImageGenerated(imageDataUrl);
      }
      
      toast.success("Professional image generated successfully!");
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error(error instanceof Error ? error.message : "Failed to generate image");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'professional-hero-image.webp';
      link.click();
    }
  };

  return (
    <div className="space-y-4 p-6 border rounded-lg bg-card">
      <div>
        <Label htmlFor="prompt">Image Description</Label>
        <Input
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the professional image you want..."
          className="mt-2"
        />
      </div>

      <Button 
        onClick={generateImage} 
        disabled={isGenerating}
        className="w-full"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Professional Image...
          </>
        ) : (
          "Generate Professional Image"
        )}
      </Button>

      {generatedImage && (
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={generatedImage} 
              alt="Generated professional image" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <Button 
            onClick={downloadImage}
            variant="outline"
            className="w-full"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;