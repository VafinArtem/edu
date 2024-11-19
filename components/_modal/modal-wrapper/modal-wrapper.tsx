import CloseButton from "@/components/_buttons/close-button/close-button";
import clsx from "clsx";
import React, {ForwardedRef, forwardRef, ReactElement} from "react";
import styles from "./modal-wrapper.module.css";
import {ModalWrapperProps} from "./modal-wrapper.props";

const ModalWrapper = forwardRef(({
  className,
  children,
  showModal,
  setShowModal,
  ...props
}: ModalWrapperProps, ref: ForwardedRef<HTMLDivElement>): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.inner, className)} {...props} ref={ref}>
        <CloseButton className={styles.close} onClick={() => setShowModal(!showModal)} />
        {children}
      </div>
    </div>
  );
});

ModalWrapper.displayName = "ModalWrapper";

export default ModalWrapper;
