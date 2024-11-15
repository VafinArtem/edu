import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import IconArrow from "./arrow.svg";
import styles from "./biggest-round-button.module.css";
import {BiggestRoundButtonProps} from "./biggest-round-button.props";

/**
 * Передаем стили ширины через класс с родительского компонента
 *
 * @param className
 * @param children
 * @param props
 * @constructor
 */
const BiggestRoundButton = <C extends BaseButtonComponent = "button">({
  className,
  children,
  ...props
}: BiggestRoundButtonProps<C>): ReactElement | null => {
  return (
    <BaseButton<C>
      className={clsx(styles.button, className)} {...(props as BaseButtonProps<C>)}>
      <div className={styles.content}>
        <span className={styles.text}>{children}</span>
        <IconArrow />
      </div>
    </BaseButton>
  );
};

export default BiggestRoundButton;
