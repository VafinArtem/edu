"use client";

import React, {ReactElement, useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {StaticDateTimePicker} from "@mui/x-date-pickers";
import {DatesProps} from "./dates.props";
import styles from "./dates.module.css";

const Dates = ({}: DatesProps): ReactElement | null => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={styles.wrapper}>
        <label className={styles.label}>
          <span className={`visually-hidden`}>Выбрать дату</span>
          <input type="text" className={styles.input} readOnly={true} placeholder={`Выбрать дату`}
            onClick={() => setIsShow(!isShow)} />
        </label>
        {isShow && <div className={styles.modal}>
          <StaticDateTimePicker />
        </div>}
      </div>
    </LocalizationProvider>
  );
};

export default Dates;
