import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./filter-button.module.css";
import {FilterButtonProps} from "./filter-button.props";

const FilterButton = <C extends BaseButtonComponent = "button">({
  className,
  option,
  isActive,
  ...props
}: FilterButtonProps): ReactElement | null => {

  return (
    <BaseButton<C> className={clsx(styles.button, className, {
      [styles.active]: isActive,
    })} {...(props as BaseButtonProps<C>)} >
      {option.name}
    </BaseButton>
  );
};

export default FilterButton;
