import React, { useState } from 'react';
import classnames from 'classnames';

import './Tabs.less';

interface TabsProps {
  selectedKey: string;
  children: React.ReactElement[];
  className?: string;
  onSelected?: (item: string | number | null) => void;
}

interface ItemProps {
  index: number;
  isActive: boolean;
  onClick: (item: React.ReactText) => void;
  children: React.ReactElement;
}

export const Tabs: React.FC<TabsProps> = ({
  className,
  selectedKey,
  children,
  onSelected,
  ...props
}) => {
  const [selectedTab, setTab] = useState<React.ReactText>(selectedKey);

  const handleSetTab = (key: React.ReactText) => {
    if (onSelected) {
      onSelected(key);
    }
    setTab(key);
  };

  const childrenProps = React.Children.map(
    children,
    (child: React.ReactElement<ItemProps>, index: number) => {
      return React.cloneElement(child, {
        index,
        isActive: child.key === selectedTab,
        onClick: () => handleSetTab(child.key || selectedKey),
      });
    },
  );

  const renderContent = () => {
    return React.Children.map(
      children,
      (child: React.ReactElement<ItemProps>) =>
        child.key === selectedTab ? child.props.children : null,
    );
  };

  return (
    <div {...props} className={classnames(className, 'bf-tabs')}>
      <div className="bf-tabs__items">{childrenProps}</div>
      <div className="bf-tabs__content">{renderContent()}</div>
    </div>
  );
};
