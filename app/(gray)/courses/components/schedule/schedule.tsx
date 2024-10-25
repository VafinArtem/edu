import React, {ReactElement} from "react";
import {ScheduleProps} from "./schedule.props";
import styles from "./schedule.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import DownloadLink from "@/components/_links/download-link/download-link";
import ScheduleItem from "@/components/_course/schedule-item/schedule-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";

const Schedule = ({className, schedule}: ScheduleProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionTextHead title={`Расписание мастер-класса`}
        text={`Рекомендуем приходить заранее, чтобы пройти регистрацию. Стоимость лекции включает в&nbsp;себя два кофе-брейка и&nbsp;обед.`}>
        <DownloadLink className={styles.downloadLink} href={`#`}>
          Скачать программу в&nbsp;PDF
        </DownloadLink>
      </SectionTextHead>
      <ul className={styles.list}>
        {(schedule && schedule.length > 0) && schedule.map((item) => <ScheduleItem schedule={item} key={item.id} />)}
      </ul>
    </SectionItem>
  );
};

export default Schedule;
