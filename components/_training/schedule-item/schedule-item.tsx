"use client";

import React, {ReactElement, useState} from "react";
import {ScheduleItemProps} from "./schedule-item.props";
import styles from "./schedule-item.module.css";
import Heading from "@/components/_tags/heading/heading";
import IconCoffee from "./coffee.svg";
import IconDinner from "./dinner.svg";
import IconLecture from "./lecture.svg";
import IconPractice from "./practice.svg";
import IconRegistration from "./registration.svg";
import clsx from "clsx";
import {ProgramType} from "@/helpers/contants";
import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";

const ScheduleTypeIcon = {
  REGISTRATION: <IconRegistration />,
  PRACTICE: <IconPractice />,
  LECTURE: <IconLecture />,
  DINNER: <IconDinner />,
  COFFEE: <IconCoffee />,
};

const ButtonColor: Record<keyof typeof ProgramType, "primary" | "primary-2"> = {
  [ProgramType.THEORY]: "primary",
  [ProgramType.PRACTICE]: "primary-2",
};

const ScheduleItem = ({schedule}: ScheduleItemProps): ReactElement | null => {
  const [showAllItems, setShowAllItems] = useState<boolean>(false);

  const typeClasNameOptions = {
    [styles.practice]: schedule.type === ProgramType.PRACTICE,
    [styles.theory]: schedule.type === ProgramType.THEORY,
  };

  return (
    <li className={clsx(styles.wrapper)}>
      <div className={styles.head}>
        <Heading fontSize={"none"} fontWeight={`medium`} tag={`h3`}
          className={styles.title}>{schedule.name}</Heading>
        <p className={styles.time}>{schedule.time}</p>
      </div>
      <ul className={clsx(styles.list, typeClasNameOptions, {
        [styles.manyItems]: schedule.list.length > 6,
        [styles.show]: showAllItems,
      })}>
        {schedule.list.map((item, index) => (<li key={index} className={clsx(styles.item, typeClasNameOptions)}>
          {ScheduleTypeIcon[item.type]}
          {item.name}
          <span className={clsx(styles.time, styles.black, styles.right)}>{item.time}</span>
        </li>))}
      </ul>
      <ButtonArrow
        className={styles.button}
        color={ButtonColor[schedule.type]}
        iconDirection={showAllItems ? "top-right" : "bottom-right"}
        onClick={() => {
          setShowAllItems(!showAllItems);
        }}
      >{showAllItems ? `Скрыть` : `Раскрыть`}</ButtonArrow>
    </li>
  );
};

export default ScheduleItem;
