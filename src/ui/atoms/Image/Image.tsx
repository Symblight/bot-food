import React from 'react';
import classnames from 'classnames';

import './Image.less';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  return (
    <img className={classnames(className, 'bf-image')} src={src} alt={alt} />
  );
};
