import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import './Popup.less';

type Placement = 'right' | 'top' | 'left' | 'bottom';

interface PopupProps {
  children: React.ReactElement;
  content: React.ReactNode;
  className?: string;
  placement?: Placement;
}

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
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

export const Popup: React.FC<PopupProps> = ({ children, className, content, placement }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const refElement = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setVisible(prevState => !prevState);
  };

  const handleHide = () => {
    setVisible(false);
  };

  useOnClickOutside(ref, handleHide);

  const styleLeft = () => ({
    left:
      refElement.current &&
      refElement.current.getBoundingClientRect().right -
        refElement.current.getBoundingClientRect().left -
        10,
    bottom: refElement.current && refElement.current.getBoundingClientRect().top - 30,
  });
  const styleRight = () => ({
    left: refElement.current && refElement.current.getBoundingClientRect().right,
    bottom: refElement.current && refElement.current.getBoundingClientRect().top - 30,
  });
  const styleBottom = () => ({
    top: refElement.current && refElement.current.getBoundingClientRect().bottom,
  });
  const styleTop = () => ({
    bottom: refElement.current && refElement.current.getBoundingClientRect().top,
  });

  const align = {
    right: styleRight(),
    left: styleLeft(),
    top: styleTop(),
    bottom: styleBottom(),
  };
  console.log(refElement.current && refElement.current.getBoundingClientRect());
  return (
    <>
      {React.cloneElement(children, {
        onClick: handleClick,
        ref: refElement,
      })}
      {visible && (
        <div ref={ref} style={align[placement]} className={classnames(className, 'bf-popup')}>
          {content}
        </div>
      )}
    </>
  );
};

Popup.defaultProps = {
  placement: 'left',
};
