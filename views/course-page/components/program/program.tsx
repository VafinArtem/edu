"use client";

import ProgramItem from "@/components/_course/program-item/program-item";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";
import {ProgramType} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./program.module.css";
import {ProgramProps} from "./program.props";

const PdfLink = dynamic(() => import("@/views/course-page/components/pdf-link/pdf-link"), {ssr: false});

const Program = ({className, program, courseTypeName, courseForPdf}: ProgramProps): ReactElement | null => {
  const {text, theory, practice} = program;

  return (
    <SectionItem className={className}>
      <SectionTextHead noWrap title={`Что будет на ${courseTypeName}`}
        text={text}>
        <PdfLink
          className={styles.downloadLink}
          course={courseForPdf}
          prepareText={"Подготовить программу в PDF"}
          downloadText={"Скачать программу в PDF"}
        />
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
