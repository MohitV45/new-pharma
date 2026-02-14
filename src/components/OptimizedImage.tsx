import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export default function OptimizedImage({
  priority = false,
  loading,
  decoding,
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      {...rest}
    />
  );
}


