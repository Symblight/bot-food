import React from 'react';
import classnames from 'classnames';

import './Footer.less';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={classnames(className, 'bf-footer')}>
      <div className="bf-footer__container">
        <div className="bf-footer__links">
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>
      </div>
    </div>
  );
};
