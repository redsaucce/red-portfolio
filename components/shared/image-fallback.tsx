"use client";

import Image from "next/image";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type ImageFallbackProps = {
  src?: string;
  alt: string;
  ratio?: number;
  className?: string;
  priority?: boolean;
};

// Shows the image when `src` is set and loads. Otherwise (no src, or the image
// fails to load) it shows a neutral gray placeholder with the same shape, and
// displays the `alt` text inside it so the placeholder is labeled.
export default function ImageFallback({
  src,
  alt,
  ratio = 3 / 2,
  className,
  priority = false,
}: ImageFallbackProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <AspectRatio
      ratio={ratio}
      className={cn("overflow-hidden rounded-2xl bg-muted", className)}
    >
      {showImage ? (
        <Image
          src={src!}
          alt={alt}
          loading="eager"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex size-full items-center justify-center bg-muted p-4 text-center text-sm text-muted-foreground"
        >
          {alt}
        </div>
      )}
    </AspectRatio>
  );
}