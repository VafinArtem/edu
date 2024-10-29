"use client";

import React, {ReactElement, useEffect, useRef, useState} from "react";
import clsx from "clsx";
import {CollapseItemProps} from "./collapse-item.props";
import styles from "./collapse-item.module.css";
import Heading from "@/components/_tags/heading/heading";
import IconArrow from "./arrow.svg";

const CollapseItem = ({
  name,
  className,
  contentClassName,
  children,
  initialIsShow = false,
  ...props
}: CollapseItemProps): ReactElement | null => {
  const [isShow, setIsShow] = useState<boolean>(initialIsShow);

  const ref = useRef(null!);

  useEffect(() => {
    const onTransitionend = () => {
      (ref.current as HTMLElement).style.overflow = `visible`;
    };

    if (isShow) {
      (ref.current as HTMLElement).addEventListener(`transitionend`, onTransitionend);
    } else {
      (ref.current as HTMLElement).style.overflow = `hidden`;
    }

    return () => (ref.current as HTMLElement).removeEventListener(`transitionend`, onTransitionend);
  }, [isShow, ref]);

  return (
    <div className={clsx(className, styles.wrapper, {
      [styles.show]: isShow,
    })} {...props}>
      <div className={styles.head} tabIndex={0} onClick={() => setIsShow(!isShow)}>
        <Heading tag={`h3`} className={styles.title} fontSize={`none`}>{name}</Heading>
        <button type={`button`} className={clsx(styles.icon, {
          [styles.rotate]: isShow,
        })}>
          <IconArrow />
        </button>
      </div>
      <div className={clsx(styles.content, contentClassName)} ref={ref}
        style={{overflow: initialIsShow ? "visible" : "hidden"}}>
        {children}
      </div>
    </div>
  );
};

export default CollapseItem;
