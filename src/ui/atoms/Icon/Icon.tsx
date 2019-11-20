/* eslint-disable global-require */
import React from 'react';
import classnames from 'classnames';

import './Icon.less';

interface IconProps {
  className?: string;
  icon: string;
}

const iconLoader = name =>
  // eslint-disable-next-line import/no-dynamic-require
  require(`!babel-loader!svg-react-loader!../../../../src/webroot/icons/${name}.svg`);

export const Icon: React.FC<IconProps> = ({ icon, className, ...props }) => {
  const SvgIcon = iconLoader(icon);
  return (
    <i className={classnames(className, 'bf-icon')} {...props}>
      <SvgIcon width="100%" height="100%" version="1.1" x="0px" y="0px" />
    </i>
  );
};
