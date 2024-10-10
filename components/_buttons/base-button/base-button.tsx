import React, {Attributes, ComponentPropsWithRef, ComponentType, createElement, CSSProperties} from "react";

export type BaseButtonComponent = | keyof React.JSX.IntrinsicElements | ComponentType<any> // eslint-disable-line

type BaseProps<C extends BaseButtonComponent = "button"> = {
  component?: C
  className?: string
  style?: CSSProperties
} & Attributes

export type BaseButtonProps<C extends BaseButtonComponent = "button"> =
  C extends keyof React.JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
      ? P extends ComponentPropsWithRef<any> // eslint-disable-line
        ? Omit<P, keyof BaseProps<C>> & BaseProps<C>
        : never
      : never

export default function BaseButton<C extends BaseButtonComponent = "button">({
  component = "button",
  children,
  ...props
}: BaseButtonProps<C>) {
  return createElement(component, props, children);
}
