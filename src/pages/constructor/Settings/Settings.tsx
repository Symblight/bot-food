import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { PaymentBlock, TokenBlock, NameBotBlock } from 'features/Constructor';

import './Settings.less';

interface SettingsProps extends RouteComponentProps {}

export const SettingsPage: React.FC<SettingsProps> = () => {
  return (
    <div className="bf-settings-page">
      <h2>Settings</h2>
      <NameBotBlock />
      <TokenBlock />
      <PaymentBlock />
    </div>
  );
};
