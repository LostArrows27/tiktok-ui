import { forwardRef } from 'react';
import image from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = image.noImage, ...props }, ref) => {
  return (
    <img
      className={className}
      ref={ref}
      src={src}
      alt={alt}
      {...props}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `${customFallback}`;
      }}
    />
  );
});

export default Image;
