"use client";

import useOpenModal from "@/hooks/useOpenModal";
import {Option} from "@/interfaces/courses";
import clsx from "clsx";
import React, {ForwardedRef, forwardRef, ReactElement, useState} from "react";
import IconArrow from "./arrow.svg";
import styles from "./custom-select.module.css";
import {CustomSelectProps} from "./custom-select.props";

const getTextValue = (value: string | string[], options: Option[]) => {
  return typeof value === "string" ? options.find((option) => option.value === value)?.name : value.map((item) => options.find((option) => option.value === item)?.name).join(`, `);
};

const CustomSelect = forwardRef(({
  name,
  options,
  initialValue,
  labelName,
  showLabel,
  className,
  isMultiselect,
  clickCb,
  initialAllValueText = "Все",
  error,
  ...props
}: CustomSelectProps, forwardRef: ForwardedRef<HTMLInputElement>): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();

  const [currentValue, setCurrentValue] = useState<string | string[]>(initialValue ?? []);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label className={styles.label} onClick={() => {
        changeModalActivityStatus(true);
      }}>
        <input type="hidden" name={name} defaultValue={currentValue} {...props} ref={forwardRef} />
        <span className={clsx(styles.name, {
          [`visually-hidden`]: !showLabel,
        })}>{labelName}</span>
        <IconArrow className={clsx(styles.icon, {
          [styles.noLabel]: !showLabel,
        })} />
        <span
          className={styles.value}>
          {!currentValue || (typeof currentValue !== "string" && currentValue.length === 0) ? initialAllValueText : getTextValue(currentValue, options)}
        </span>
      </label>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
        [styles.withError]: error,
      })} ref={ref}>
        <ul className={styles.list}>
          {options.map(({value, name, color}) => <li
            key={value}
            onClick={() => {
              if ((typeof currentValue === "string" && currentValue === value) || (typeof currentValue !== "string" && currentValue?.includes(value))) {
                if (typeof currentValue === "string") {
                  setCurrentValue([]);

                  if (clickCb) {
                    clickCb([]);
                  }
                } else {
                  const values = [...currentValue];

                  const index = values.indexOf(value);

                  if (index !== -1) {
                    values.splice(index, 1);
                  }

                  setCurrentValue(values);

                  if (clickCb) {
                    clickCb(values);
                  }
                }

                return;
              }

              const values = !isMultiselect ? value : [...new Set([...currentValue, value])];

              setCurrentValue(values);

              if (clickCb) {
                clickCb(values);
              }
            }}
            className={clsx(styles.item, {
              [styles.active]: typeof currentValue === "string" ? value === currentValue : currentValue?.includes(value),
            })}>
            {color && <span
              className={styles.dot}
              style={{backgroundColor: color}}></span>}
            {name}
          </li>)}
        </ul>
      </div>
    </div>
  );
});

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
