import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

import './Dropdown.less';

type Placement = 'downLeft' | 'downRight';

export interface DropdownProps {
  onVisibleChange?: (value: boolean) => void;
  visible?: boolean;
  disabled?: boolean;
  overlay: React.ReactElement;
  children: React.ReactElement;
  className?: string;
  placement?: Placement;
}

export function useOnClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: React.MouseEvent) => void,
) {
  useEffect(() => {
    const listener = (event: any): void => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  children,
  overlay,
  onVisibleChange,
  placement,
}) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleVisible = () => {
    if (onVisibleChange) {
      onVisibleChange(toggle);
    }
  };

  const handleHide = () => {
    setToggle(false);
  };

  useOnClickOutside(ref, handleHide);

  const handleClick = () => {
    setToggle((prevState) => !prevState);
  };

  const handleClickOption = () => {
    handleHide();
    handleVisible();
  };

  const renderOptions = () => {
    return (
      <ul
        role="menu"
        className={classnames(
          toggle && `bf-dropdown__menu--active`,
          placement && `bf-dropdown__menu--${placement}`,
          'bf-dropdown__menu',
        )}
      >
        {React.Children.map(
          overlay.props.children,
          (option: React.ReactElement<any>) => (
            <li
              key={option.props.value}
              value={option.props.value}
              role="menuitem"
              className="bf-dropdown__menu-item"
              onKeyPress={handleClickOption}
              onClick={handleClickOption}
            >
              {option}
            </li>
          ),
        )}
      </ul>
    );
  };

  return (
    <div className={classnames(className, 'bf-dropdown')} ref={ref}>
      {React.cloneElement(children, {
        onClick: handleClick,
        className: classnames('bf-dropdown__control'),
      })}
      {toggle && renderOptions()}
    </div>
  );
};

Dropdown.defaultProps = {
  placement: 'downLeft',
};
