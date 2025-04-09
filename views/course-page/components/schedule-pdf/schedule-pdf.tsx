"use client";

import Header from "@/components/_pdf/header/header";
import Program from "@/components/_pdf/program/program";
import Schedule from "@/components/_pdf/schedule/schedule";
import Top from "@/components/_pdf/top/top";
import {Document, Font, Page, StyleSheet} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {SchedulePdfProps} from "./schedule-pdf.props";

const SchedulePdf = ({course}: SchedulePdfProps): ReactElement | null => {
  Font.register({
    family: "Inter", fonts: [
      {src: "/pdf-fonts/Inter-Regular.woff"},
      {src: "/pdf-fonts/Inter-Medium.woff", fontWeight: 500},
    ],
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      gap: 20,
      backgroundColor: "#F2F4F7",
      padding: "10px 25px",
      fontFamily: "Inter",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />
        <Top
          name={course.name}
          location={course.location.city}
          date={course.date}
          description={course.description}
          courseType={course.typeName.nominative}
          speakers={course.speakers}
          colors={course.colors}
        />
        {(course.program.theory.length > 0 || course.program.theory.length > 0) && <Program
          courseType={course.typeName.prepositional.toLowerCase()}
          theory={course.program.theory}
          practice={course.program.practice}
        />}
        {course.schedule.length > 0 && <Schedule
          location={course.location}
          courseType={course.typeName.prepositional.toLowerCase()}
          schedule={course.schedule}
        />}
      </Page>
    </Document>
  );
};

export default SchedulePdf;
