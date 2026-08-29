/* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
import type { ImgHTMLAttributes } from "react";

type TestImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

export default function TestImage({
  fill: _fill,
  priority: _priority,
  unoptimized: _unoptimized,
  ...props
}: TestImageProps) {
  void _fill;
  void _priority;
  void _unoptimized;
  return <img {...props} />;
}
