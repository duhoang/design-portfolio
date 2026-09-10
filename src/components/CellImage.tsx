import type { CSSProperties } from 'react';
import { useLightbox } from './Lightbox';

type CellImageProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
};

/** An image inside a `.cell` that opens the lightbox when clicked. */
export default function CellImage({ src, className, style, alt = '' }: CellImageProps) {
  const { open } = useLightbox();
  return (
    <img
      src={src}
      className={className}
      style={style}
      alt={alt}
      onClick={() => open(src)}
    />
  );
}
