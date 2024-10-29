"use client";

import React, {ReactElement, useState} from "react";
import {DatesProps} from "./dates.props";
import styles from "./dates.module.css";
import {DateRange, DayPicker, OnSelectHandler} from "react-day-picker";
import {ru} from "react-day-picker/locale";
import "react-day-picker/style.css";
import "./date-picker.css";
import IconReset from "./reset.svg";
import useOpenModal from "@/hooks/useOpenModal";
import {formatDateFromDatePicker} from "@/helpers/helpers";

const Dates = ({}: DatesProps): ReactElement | null => {
  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();
  const [dates, setDates] = useState<DateRange | undefined>(undefined);

  const onSelect: OnSelectHandler<DateRange | undefined> = (selected) => {
    setDates(selected);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        <span className={`visually-hidden`}>Выбрать дату</span>
        <input type="text" className={styles.input} defaultValue={formatDateFromDatePicker(dates)} readOnly={true}
          placeholder={`Выбрать дату`}
          onClick={() => changeModalActivityStatus(!showModal)} />
      </label>
      {dates &&
        <button
          onClick={() => setDates(undefined)}
          className={styles.reset}
          type={"button"}
        ><IconReset /></button>}
      {showModal && <div className={styles.modal} ref={ref}>
        <DayPicker
          locale={ru}
          selected={dates}
          onSelect={onSelect}
          mode={"range"}
          showOutsideDays
          disabled={{before: new Date()}}
        />
      </div>}
    </div>
  );
};

export default Dates;
