import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
  unoptimized?: boolean;
};

export default function Image({ priority, unoptimized, ...props }: ImageProps) {
  return (
    <img
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
