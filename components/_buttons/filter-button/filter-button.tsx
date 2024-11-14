import React, {ReactElement} from "react";
import {FilterButtonProps} from "./filter-button.props";
import styles from "./filter-button.module.css";
import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";

const FilterButton = <C extends BaseButtonComponent = "button">({
  className,
  option,
  ...props
}: FilterButtonProps): ReactElement | null => {

  return (
    <BaseButton<C> className={clsx(styles.button, className)} {...(props as BaseButtonProps<C>)} >
      {option.name}
    </BaseButton>
  );
};

export default FilterButton;
