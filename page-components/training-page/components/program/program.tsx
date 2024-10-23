import React, {ReactElement} from "react";
import {ProgramProps} from "./program.props";
import styles from "./program.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import SectionHead from "@/components/_training/section-head/section-head";
import DownloadLink from "@/components/_links/download-link/download-link";
import ProgramItem from "@/components/_training/program-item/program-item";
import {ProgramType} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";

const Program = ({className, program, courseTypeName}: ProgramProps): ReactElement | null => {
  const {text, theory, pdfLink, practice} = program;

  return (
    <SectionItem className={className}>
      <SectionHead title={`Что будет на ${courseTypeName}`}
        text={text}>
        {pdfLink && <DownloadLink className={styles.downloadLink} href={pdfLink}>
          Скачать программу в&nbsp;PDF
        </DownloadLink>}
      </SectionHead>
      <ul className={styles.list}>
        {theory && <ProgramItem
          type={ProgramType.THEORY}
          learnList={theory.learnList}
          themeList={theory.themeList}
          duration={`${theory.duration} ${getDeclension(theory.duration, [`час`, `часа`, `часов`])}`}
        />}

        {theory && <ProgramItem
          type={ProgramType.PRACTICE}
          learnList={practice.learnList}
          themeList={practice.themeList}
          duration={`${practice.duration} ${getDeclension(practice.duration, [`час`, `часа`, `часов`])}`}
        />}

      </ul>
    </SectionItem>
  );
};

export default Program;
