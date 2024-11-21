"use client";

import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Heading from "@/components/_tags/heading/heading";
import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import styles from "./schedule-item.module.css";
import {ScheduleItemProps} from "./schedule-item.props";

const ButtonColor: Record<"red" | "blue", "primary" | "primary-2"> = {
  red: "primary",
  blue: "primary-2",
};

const ScheduleItem = ({schedule}: ScheduleItemProps): ReactElement | null => {
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const typeClasNameOptions = {
    [styles.practice]: schedule.color === "blue",
    [styles.theory]: schedule.color === "red",
  };

  return (
    <li className={clsx(styles.wrapper)}>
      <div className={styles.head}>
        <Heading fontSize={"none"} fontWeight={`medium`} tag={`h3`}
          className={styles.title}>{schedule.name}</Heading>
        <p className={styles.time}>{schedule.times.start}{schedule.times.end ? ` — ${schedule.times.end}` : ``}</p>
      </div>
      <ul className={clsx(styles.list, typeClasNameOptions, {
        [styles.manyItems]: schedule.list.length > 6,
        [styles.show]: showAllItems,
      })}>
        {schedule.list.map((item, index) => (<li key={index} className={clsx(styles.item, typeClasNameOptions)}>
          <span className={styles.icon} dangerouslySetInnerHTML={{__html: item.icon}}></span>
          {item.name}
          <span
            className={clsx(styles.time, styles.black, styles.right)}>{item.times.start}{item.times.end ? ` — ${item.times.end}` : ``}</span>
        </li>))}
      </ul>
      {schedule.list.length > 6 && <ButtonArrow
        className={styles.button}
        color={ButtonColor[schedule.color]}
        iconDirection={showAllItems ? "top-right" : "bottom-right"}
        onClick={() => {
          setShowAllItems(!showAllItems);
        }}
        borderColor={"light"}
      >{showAllItems ? `Скрыть` : `Раскрыть`}</ButtonArrow>}
    </li>
  );
};

export default ScheduleItem;
