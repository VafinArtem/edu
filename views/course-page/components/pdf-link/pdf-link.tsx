"use client";

import DownloadButton from "@/components/_buttons/download-button/download-button";
import SchedulePdf from "@/views/course-page/components/schedule-pdf/schedule-pdf";
import {PDFDownloadLink} from "@react-pdf/renderer";
import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import DownloadIcon from "./download.svg";
import styles from "./pdf-link.module.css";
import {PdfLinkProps} from "./pdf-link.props";

const PdfLink = ({course, className, downloadText, prepareText}: PdfLinkProps): ReactElement | null => {
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);

  return (
    <>
      {!generatePdf && (
        <DownloadButton className={className} type={"button"}
          onClick={() => setGeneratePdf(true)}>{prepareText}</DownloadButton>)}
      {generatePdf &&
        <PDFDownloadLink
          className={clsx(styles.link, className)}
          document={<SchedulePdf
            course={course}
          />}
          fileName={"schedule.pdf"}
        >
          {({loading, error}) => {
            if (error) {
              return <>Ошибка при подготовке PDF <DownloadIcon /></>;
            }

            return loading ? <>Готовим ссылку <DownloadIcon /></> : <>{downloadText}<DownloadIcon /></>;
          }}
        </PDFDownloadLink>
      }
    </>
  );
};

export default PdfLink;
