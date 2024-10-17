import React, {ReactElement} from "react";
import {ExternalLinkProps} from "./external-link.props";
import styles from "./external-link.module.css";
import clsx from "clsx";
import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

const ExternalLink = <C extends BaseButtonComponent = "button">({
  className,
  color = "primary",
  ...props
}: ExternalLinkProps<C>): ReactElement | null => {
  const classNameOptions = [className, styles.link, {
    [styles.primary]: color === "primary",
    [styles.white]: color === "white",
  }];

  return (
    <BaseButton<C> className={clsx(classNameOptions)} {...(props as BaseButtonProps<C>)} />
  );
};

export default ExternalLink;
