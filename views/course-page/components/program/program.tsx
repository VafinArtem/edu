import ProgramItem from "@/components/_course/program-item/program-item";
import DownloadLink from "@/components/_links/download-link/download-link";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";
import {ProgramType} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import React, {ReactElement} from "react";
import styles from "./program.module.css";
import {ProgramProps} from "./program.props";

const Program = ({className, program, courseTypeName}: ProgramProps): ReactElement | null => {
  const {text, theory, pdfLink, practice} = program;

  return (
    <SectionItem className={className}>
      <SectionTextHead title={`Что будет на ${courseTypeName}`}
        text={text}>
        {pdfLink && <DownloadLink className={styles.downloadLink} href={pdfLink}>
          Скачать программу в&nbsp;PDF
        </DownloadLink>}
      </SectionTextHead>
      <ul className={styles.list}>
        {theory && theory.map((item) => (<ProgramItem
          key={item.id}
          type={ProgramType.THEORY}
          learnList={item.learnList}
          themeList={item.themeList}
          duration={item.duration ? `${item.duration} ${getDeclension(item.duration, [`час`, `часа`, `часов`])}` : undefined}
        />))}

        {practice && practice.map((item) => (<ProgramItem
          key={item.id}
          type={ProgramType.PRACTICE}
          learnList={item.learnList}
          themeList={item.themeList}
          duration={item.duration ? `${item.duration} ${getDeclension(item.duration, [`час`, `часа`, `часов`])}` : undefined}
        />))}

      </ul>
    </SectionItem>
  );
};

export default Program;
