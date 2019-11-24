import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Settings.less';

interface SettingsProps extends RouteComponentProps {}

export const SettingsPage: React.FC<SettingsProps> = () => {
  return <div>SettingsPage</div>;
};
