"use client";

import Header from "@/components/_pdf/header/header";
import Top from "@/components/_pdf/top/top";
import {Document, Font, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
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
          location={course.location}
          date={course.date}
          description={course.description}
          courseType={course.typeName.nominative}
          speakers={course.speakers}
          colors={course.colors}
        />
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

export default SchedulePdf;
