import React, {ForwardedRef, forwardRef, ReactElement} from "react";
import {ModalWrapperProps} from "./modal-wrapper.props";
import styles from "./modal-wrapper.module.css";
import clsx from "clsx";
import IconClose from "./close.svg";

const ModalWrapper = forwardRef(({
  className,
  children,
  showModal,
  setShowModal,
  ...props
}: ModalWrapperProps, ref: ForwardedRef<HTMLDivElement>): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.inner, className)} {...props} ref={ref}>
        <button className={styles.close} type={`button`} onClick={() => setShowModal(!showModal)}>
          <IconClose width={24} height={24} />
          <span className={`visually-hidden`}>Закрыть модальное окно</span>
        </button>
        {children}
      </div>
    </div>
  );
});

ModalWrapper.displayName = "ModalWrapper";

export default ModalWrapper;
