import React from 'react';
import AnimationLoader from '../AnimationLoader/AnimationLoader';
import CloseIcon from '../../icons/Close';
import cn from 'clsx';
import s from './ModalContainer.module.css';

interface ModalContainerProps {
  message?: string;
  subMessage?: string;
  animationData?: any;
  className?: string;
  show: Boolean;
  closed: any;
  children?: React.ReactNode;
  Icon?: any;
  showIcon?: Boolean;
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  const {
    animationData,
    message,
    subMessage,
    className,
    children,
    closed,
    Icon,
    showIcon,
  } = props;
  const { show = false } = props;
  const rootClassName = cn(
    s.root,
    className
  );

  const handleClose = () => {
    closed(true);
  };
  return (
    <div className={`${show ? s.show : ''} ${rootClassName}`}>
      <div className={s.closeIcon} onClick={() => handleClose()}>
        <CloseIcon />
      </div>
      <div className={s.content}>
        {animationData && (
          <AnimationLoader animationData={animationData} />
        )}
        {showIcon && (
          <div className={s.icon} style={{ display: 'inline !important' }}>
            <Icon />
          </div>
        )}
        {message && <p className={s.message}>{message}</p>}
        {subMessage && <p className={s.subMessage}>{subMessage}</p>}
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
