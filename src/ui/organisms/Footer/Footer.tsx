import React from 'react';
import classnames from 'classnames';

import { Icon, Image } from 'ui';

//doughnut
import Doughnut from 'src/webroot/img/doughnut.png';

import './Footer.less';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={classnames(className, 'bf-footer')}>
      <span className="bf-footer__border"></span>
      <div className="bf-footer__container">
        <div className="bf-footer__links">
          <a
            href="https://github.com/Symblight/"
            rel="noopener noreferrer"
            target="_blank"
            className="bf-footer__link"
          >
            <Icon icon="github" />
            GitHub
          </a>
          <a
            href="https://www.buymeacoffee.com/symblight"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image className="bf-footer__image" src={Doughnut} alt="Doughnut" />{' '}
            Buy me coffee
          </a>
          <div>2020</div>
        </div>
      </div>
    </div>
  );
};
