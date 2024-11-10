import React, {ReactElement} from "react";
import {ProgramProps} from "./program.props";
import styles from "./program.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import DownloadLink from "@/components/_links/download-link/download-link";
import ProgramItem from "@/components/_course/program-item/program-item";
import {ProgramType} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";

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
        {theory && <ProgramItem
          type={ProgramType.THEORY}
          learnList={theory.learnList}
          themeList={theory.themeList}
          duration={`${theory.duration} ${getDeclension(theory.duration, [`час`, `часа`, `часов`])}`}
        />}

        {practice && <ProgramItem
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
