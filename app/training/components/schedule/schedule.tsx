import React, {ReactElement} from "react";
import {ScheduleProps} from "./schedule.props";
import styles from "./schedule.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import SectionHead from "@/components/_training/section-head/section-head";
import DownloadLink from "@/components/_links/download-link/download-link";
import ScheduleItem from "@/components/_training/schedule-item/schedule-item";

const Schedule = ({className, schedule}: ScheduleProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionHead title={`Расписание мастер-класса`}
        text={`Рекомендуем приходить заранее, чтобы пройти регистрацию. Стоимость лекции включает в&nbsp;себя два кофе-брейка и&nbsp;обед.`}>
        <DownloadLink className={styles.downloadLink} href={`#`}>
          Скачать программу в&nbsp;PDF
        </DownloadLink>
      </SectionHead>
      <ul className={styles.list}>
        {(schedule && schedule.length > 0) && schedule.map((item) => <ScheduleItem schedule={item} key={item.id} />)}
      </ul>
    </SectionItem>
  );
};

export default Schedule;
