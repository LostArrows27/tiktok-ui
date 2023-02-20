import { useState, forwardRef } from 'react';
import image from '~/assets/images';

function Image({ src, alt, fallBack = image.noImage, ...props }, ref) {
  // fallBack => link to customize error image
  const [_fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(fallBack);
  };

  return <img {...props} ref={ref} src={_fallBack || src} alt={alt} onError={handleError} />;
}

export default forwardRef(Image);
