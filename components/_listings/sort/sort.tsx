import React, {ReactElement} from "react";
import clsx from "clsx";
import {SortProps} from "./sort.props";
import styles from "./sort.module.css";
import IconArrow from "./arrow.svg";
import IconArrows from "./arrows.svg";
import useOpenModal from "@/hooks/useOpenModal";

const Sort = ({}: SortProps): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();

  return (
    <div className={styles.wrapper}>
      <button className={clsx(styles.button, {
        [styles.open]: showModal,
      })} onClick={() => changeModalActivityStatus(true)}>
        <IconArrows width={16} height={16} />
        <span className={styles.text}>Сначала ближайшие</span>
        <IconArrow width={16} height={17} className={styles.arrow} />
      </button>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })} ref={ref}>
        <ul className={styles.list}>
          <li className={styles.item}>Сначала ближайшие</li>
          <li className={styles.item}>Сначала дальние</li>
          <li className={styles.item}>Сначала дороже</li>
          <li className={styles.item}>Сначала дешевле</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
