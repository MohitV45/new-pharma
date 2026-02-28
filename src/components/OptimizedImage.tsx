import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export default function OptimizedImage({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      // @ts-ignore - fetchpriority is a valid attribute but not in all type definitions yet
      fetchpriority={priority ? 'high' : fetchPriority ?? 'auto'}
      {...rest}
    />
  );
}


