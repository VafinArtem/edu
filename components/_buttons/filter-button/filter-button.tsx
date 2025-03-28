import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./filter-button.module.css";
import {FilterButtonProps} from "./filter-button.props";

const FilterButton = <C extends BaseButtonComponent = "button">({
  className,
  option,
  isActive,
  enableHover,
  children,
  ...props
}: FilterButtonProps<C>): ReactElement | null => {

  return (
    <BaseButton<C> className={clsx(styles.button, className, {
      [styles.active]: isActive,
      [styles.enableHover]: enableHover,
    })} {...(props as BaseButtonProps<C>)} >
      {option && option.name}
      {!option && children}
    </BaseButton>
  );
};

export default FilterButton;
