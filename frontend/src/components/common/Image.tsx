import React, { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  width?: number | string;
  height?: number | string;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  fallbackText = 'Image not available',
  width,
  height
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    // More discreet error logging
    console.warn(`Image could not be loaded: ${src}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Use a default image path that's guaranteed to exist
  const imageSrc = src || '/images/placeholder-product.jpg';

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width, height, minHeight: '100px' }}
      >
        <span className="text-gray-500 text-sm">{fallbackText}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        style={{ width, height }}
      />
    </div>
  );
};

export default Image;