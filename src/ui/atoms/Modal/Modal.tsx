import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { Icon } from 'ui';

import './Modal.less';

interface ModalProps {
  visible?: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose?: (event: MouseEvent | any) => void;
}

interface PortalProps {
  root: Element;
  children?: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ root, children }) => {
  return ReactDOM.createPortal(children, root);
};

export const Modal: React.FC<ModalProps> = ({
  title,
  visible,
  children,
  onClose,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (!visible) {
    return null;
  }
  const modalRoot = document.querySelector('#modal-root');

  return (
    <Portal root={modalRoot || document.body}>
      <div className="bf-modal">
        <div className="bf-modal__modal-control">
          <div className="bf-modal__inner-wrap" ref={wrapperRef}>
            <div className="bf-modal__title">
              {title}
              <div
                className="bf-modal__close"
                onClick={onClose}
                onKeyDown={onClose}
                role="presentation"
              >
                <Icon icon="close" />
              </div>
            </div>
            <div className="bf-modal__body">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.defaultProps = {
  visible: false,
};
