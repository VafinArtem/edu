import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./info-button.module.css";
import {InfoButtonProps} from "./info-button.props";

const InfoButton = <C extends BaseButtonComponent = "button">({
  className,
  ...props
}: InfoButtonProps<C>): ReactElement | null => {

  return (
    <BaseButton<C> className={clsx(styles.button, className)} {...(props as BaseButtonProps<C>)} />
  );
};

export default InfoButton;
