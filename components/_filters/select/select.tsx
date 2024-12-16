"use client";

import Wrapper from "@/components/_filters/wrapper/wrapper";
import useOpenModal from "@/hooks/useOpenModal";
import {Option} from "@/interfaces/courses";
import clsx from "clsx";
import {ReadonlyURLSearchParams} from "next/navigation";
import React, {ReactElement, useState} from "react";
import IconArrow from "./arrow.svg";
import styles from "./select.module.css";
import {SelectProps} from "./select.props";

const getTextValue = (value: string | string[], options: Option[]) => {
  console.log(value);
  return typeof value === "string" ? options.find((option) => option.value === value)?.name : value.map((item) => options.find((option) => option.value === item)?.name).join(`, `);
};

export const getSelectValue = (searchParams: ReadonlyURLSearchParams, paramName: string) => {
  const value = searchParams.get(paramName) ?? ``;

  if (!value) {
    return;
  }

  return value && !value.includes(`,`) ? value : value.split(`,`).map((el) => el);
};

const Select = ({
  name,
  options,
  initialValue,
  labelName,
  className,
  isMultiselect,
  clickCb,
  ...props
}: SelectProps): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();

  const [currentValue, setCurrentValue] = useState<string | string[]>(initialValue ?? []);

  return (
    <Wrapper className={clsx(styles.wrapper, className)}>
      <label className={styles.label} tabIndex={0} onClick={() => {
        changeModalActivityStatus(true);
      }}>
        <input type="hidden" name={name} defaultValue={currentValue} {...props} />
        <span className={styles.name}>{labelName}</span>
        <IconArrow className={styles.icon} />
        <span
          className={styles.value}>
          {!currentValue || (typeof currentValue !== "string" && currentValue.length === 0) ? `Все` : getTextValue(currentValue, options)}
        </span>
      </label>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
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
    </Wrapper>
  );
};

export default Select;
