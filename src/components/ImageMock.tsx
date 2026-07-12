import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
  unoptimized?: boolean;
  fill?: boolean;
};

export default function Image({ priority, unoptimized, fill, style, ...props }: ImageProps) {
  return (
    <img
      loading={priority ? "eager" : "lazy"}
      style={{
        ...(fill ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" } : {}),
        ...style,
      }}
      {...props}
    />
  );
}
