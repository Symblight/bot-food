import React from 'react';
import classnames from 'classnames';

import './Spinner.less';

interface SpinnerProps {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return <div className={classnames(className, 'bf-loader')} />;
};
