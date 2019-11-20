import React, { useRef, useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';

import { Icon, Input } from 'ui';

import './Select.less';

interface ChildProps {
  value: string;
  children: string;
}

interface OptionNodeProps {
  props?: ChildProps;
}

export interface SelectProps {
  className?: string;
  disabled?: boolean;
  search?: boolean;
  label?: string;
  value?: string;
  error?: string;
  children?: React.ReactNode[];
  onChange?: (value: string) => void;
}

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
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

  return null;
}

export const Select: React.FC<SelectProps> = ({
  value: valueProps,
  search,
  className,
  children,
  onChange,
  error,
}) => {
  const [opened, toggleOpened] = useState<boolean>(false);
  const [value, setValue] = useState<string>(valueProps);
  const [valueInput, setValueInput] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getTextOption = useCallback(
    (data) => {
      const target: OptionNodeProps = children.find(
        (child: React.ReactElement<ChildProps>) => child.props.value === data,
      );
      return target && target.props.children;
    },
    [children],
  );

  useEffect(() => {
    setValueInput(getTextOption(value));
  }, [getTextOption, value]);

  const handleToggle = () => {
    toggleOpened((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    toggleOpened(false);
  };

  useOnClickOutside(wrapperRef, handleClickOutside);

  const handleClickOption = (props) => {
    setValue(props.value);
    setValueInput(getTextOption(props.value));
    handleToggle();

    if (onChange) {
      onChange(props.value);
    }
  };

  const handleChangeInput = (event) => {
    setValueInput(event.target.value);
  };

  const renderOptions = () => {
    return (
      <ul
        className={classnames(
          opened ? `bf-select__list--active` : null,
          'bf-select__list',
        )}>
        {React.Children.map(
          children,
          (option: React.ReactElement<ChildProps>) => (
            <li
              key={option.props.value}
              value={option.props.value}
              role="option"
              aria-selected
              className={classnames(
                value === option.props.value && 'bf-select__listitem--active',
                'bf-select__listitem',
              )}
              onKeyPress={() => handleClickOption(option.props)}
              onClick={() => handleClickOption(option.props)}>
              {option.props.children}
            </li>
          ),
        )}
      </ul>
    );
  };

  return (
    <div className={classnames(className, 'bf-select')} ref={wrapperRef}>
      <Icon
        icon={opened ? 'arrow-upward' : 'arrow-downward'}
        className="bf-select__icon"
      />
      <Input
        readOnly={!search}
        onClick={handleToggle}
        onChange={handleChangeInput}
        value={valueInput}
        className={classnames(
          !search && 'bf-select__input--readonly',
          'bf-select__input',
        )}
        error={error}
      />
      {renderOptions()}
    </div>
  );
};

Select.defaultProps = {
  search: false,
};
