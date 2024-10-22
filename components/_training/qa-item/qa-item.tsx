"use client";

import React, {ReactElement, useEffect, useRef, useState} from "react";
import {QaItemProps} from "./qa-item.props";
import styles from "./qa-item.module.css";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import IconPlus from "./plus.svg";
import clsx from "clsx";

const QaItem = ({qa, className, parentRef}: QaItemProps): ReactElement | null => {
  const ref = useRef<HTMLElement>(null!);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      let refValue = null;

      if (parentRef.current) {
        refValue = parentRef.current;
      }

      const onClick = (evt: Event) => {
        if (ref.current && !ref.current.contains(evt.target as HTMLElement)) {
          setIsOpen(false);
        }
      };

      if (refValue) {
        refValue.addEventListener(`click`, onClick);
      }
      return () => {
        if (refValue) {
          refValue.removeEventListener(`click`, onClick);
        }
      };
    }
  }, [isOpen, parentRef]);

  return (
    <article className={clsx(styles.wrapper, className, {
      [styles.show]: isOpen,
    })} ref={ref}>
      <div className={styles.head} onClick={() => {
        setIsOpen(!isOpen);
      }}>
        <Paragraph className={styles.question} fontWeight={"medium"} fontSize={"none"}>{qa.question}</Paragraph>
        <button
          type={`button`}
          className={styles.openButton}
          aria-label={isOpen ? "Скрыть ответ" : "Открыть ответ"}>
          <IconPlus />
        </button>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: qa.answer}}></div>
    </article>
  );
};

export default QaItem;
