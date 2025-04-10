"use client";

import ScheduleItem from "@/components/_course/schedule-item/schedule-item";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./schedule.module.css";
import {ScheduleProps} from "./schedule.props";

const PdfLink = dynamic(() => import("@/views/course-page/components/pdf-link/pdf-link"), {ssr: false});

const Schedule = ({
  className,
  text,
  courseTypeName,
  schedule,
  courseForPdf,
}: ScheduleProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionTextHead noWrap title={`Расписание ${courseTypeName}`}
        text={text}>
        <PdfLink
          className={styles.downloadLink}
          course={courseForPdf}
          prepareText={"Скачать расписание в PDF"}
          downloadText={"Ссылка для скачивания готова"}
        />
      </SectionTextHead>
      <ul className={styles.list}>
        {(schedule && schedule.length > 0) && schedule.map((item) => <ScheduleItem schedule={item} key={item.id} />)}
      </ul>
    </SectionItem>
  );
};

export default Schedule;
