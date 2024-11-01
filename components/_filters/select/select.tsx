"use client";

import React, {ReactElement, useState} from "react";
import clsx from "clsx";
import {SelectProps} from "./select.props";
import styles from "./select.module.css";
import IconArrow from "./arrow.svg";
import Wrapper from "@/components/_filters/wrapper/wrapper";
import useOpenModal from "@/hooks/useOpenModal";
import {Option} from "@/interfaces/courses";

const convertValue = (value: number | number[]): string => {
  return typeof value === "number" ? value.toString() : value.toString();
};

const getTextValue = (value: number | number[], options: Option[]) => {
  return typeof value === "number" ? options.find((option) => option.value === value)?.name : value.map((item) => options.find((option) => option.value === item)?.name).join(`, `);
};

const Select = ({name, options, labelName, className, ...props}: SelectProps): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();

  const [currentValue, setCurrentValue] = useState<number | number[]>([]);

  return (
    <Wrapper className={clsx(styles.wrapper, className)}>
      <label className={styles.label} onClick={() => {
        changeModalActivityStatus(true);
      }}>
        <input type="hidden" name={name} defaultValue={convertValue(currentValue)} {...props} />
        <span className={styles.name}>{labelName}</span>
        <IconArrow className={styles.icon} />
        <span
          className={styles.value}>
          {!currentValue || (typeof currentValue !== "number" && currentValue.length === 0) ? `Все` : getTextValue(currentValue, options)}
        </span>
      </label>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })} ref={ref}>
        <ul className={styles.list}>
          {options.map(({value, name, color}) => <li
            key={value}
            onClick={() => {
              if ((typeof currentValue === "number" && currentValue === value) || (typeof currentValue !== "number" && currentValue?.includes(value))) {
                if (typeof currentValue === "number") {
                  setCurrentValue([]);
                } else {
                  const values = [...currentValue];

                  const index = values.indexOf(value);

                  if (index !== -1) {
                    values.splice(index, 1);
                  }

                  setCurrentValue(values);
                }

                return;
              }

              setCurrentValue(typeof currentValue === "number" ? value : [...new Set([...currentValue, value])]);
            }}
            className={clsx(styles.item, {
              [styles.active]: typeof currentValue === "number" ? value === currentValue : currentValue?.includes(value),
            })}>
            {color && <span
              className={styles.dot}
              style={{backgroundColor: color}}></span>}
            {name}
          </li>)}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Select;
