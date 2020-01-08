import React from 'react';
import classnames from 'classnames';

import './Tab.less';

interface TabProps {}

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="bf-tab">{children}</div>;
};
