import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import {NavigationLinkProps} from "@/components/_footer-navigation/navigation-link/navigation-link.props";
import clsx from "clsx";
import styles from "./navigation-link.module.css";

function NavigationLink<C extends BaseButtonComponent = "button">({
  className,
  ...props
}: NavigationLinkProps<C>) {
  return (
    <li className={clsx(styles.wrapper, className)}>
      <BaseButton<C> className={clsx(styles.link)} {...(props as BaseButtonProps<C>)} />
    </li>
  );
}

export default NavigationLink;
