import React, {ReactElement} from "react";
import { nanoid } from 'nanoid'
import {ProgramItemProps} from "./program-item.props";
import styles from "./program-item.module.css";
import clsx from "clsx";
import {ProgramThemeName, ProgramType, ProgramTypeName} from "@/helpers/contants";
import IconPencil from './pencil.svg'

const ProgramItem = ({type, duration, learnList, themeList}: ProgramItemProps): ReactElement | null => {

  return (
    <li className={styles.wrapper}>
      <div className={styles.head}>
        <h3 className={clsx(styles.tag, {
          [styles.practice]: type === ProgramType.PRACTICE,
          [styles.theory]: type === ProgramType.THEORY,
        })}>
          {ProgramTypeName[type]}
        </h3>
        {duration && <p className={styles.duration}>{duration}</p>}
      </div>
      {(learnList && learnList.length > 0) && <div className={styles.item}>
        <h4 className={styles.title}>Что вы узнаете</h4>
        <ul className={clsx(styles.learnList, {
          [styles.practice]: type === ProgramType.PRACTICE,
          [styles.theory]: type === ProgramType.THEORY,
        })}>
          {learnList.map((el) => <li className={styles.listItem} key={nanoid()}>
            <div className={styles.icon}>
              <IconPencil />
            </div>
            {el}
          </li>)}
        </ul>
      </div>}
      {(themeList && themeList.length > 0) && <div className={styles.item}>
        <h4 className={styles.title}>{ProgramThemeName[type]}</h4>
        <ul className={clsx(styles.list, {
          [styles.practice]: type === ProgramType.PRACTICE,
          [styles.theory]: type === ProgramType.THEORY,
        })}>
          {themeList.map((el) => <li className={styles.listItem} key={nanoid()}>{el}</li>)}
        </ul>
      </div>}
    </li>
  );
};

export default ProgramItem;
