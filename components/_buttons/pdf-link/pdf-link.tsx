"use client";

import SchedulePdf from "@/views/course-page/components/schedule-pdf/schedule-pdf";
import {PDFDownloadLink} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {PdfLinkProps} from "./pdf-link.props";

const PdfLink = ({course}: PdfLinkProps): ReactElement | null => {
  return (
    <PDFDownloadLink
      document={<SchedulePdf
        course={course}
      />}
      fileName={"schedule.pdf"}
    >
      Скачать расписание в&nbsp;PDF
    </PDFDownloadLink>
  );
};

export default PdfLink;
