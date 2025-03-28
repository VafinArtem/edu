"use client";

import InfoButton from "@/components/_buttons/info-button/info-button";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import useOpenModal from "@/hooks/useOpenModal";
import {CertificateItem} from "@/interfaces/payment";
import Certificate from "@/views/payment-page/components/certificate/certificate";
import OrderModal from "@/views/payment-page/components/order-modal/order-modal";
import TermsOfUseModal from "@/views/payment-page/components/terms-of-use-modal/terms-of-use-modal";
import {certificates} from "@/views/payment-page/constants";
import React, {ReactElement, useEffect, useState} from "react";
import styles from "./certificates.module.css";
import {CertificatesProps} from "./certificates.props";

const Certificates = ({}: CertificatesProps): ReactElement | null => {
  const [currentCertificate, setCurrentCertificate] = useState<CertificateItem | null>(null);
  const {ref, changeModalActivityStatus, showModal} = useOpenModal<HTMLDivElement>();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [showModal]);

  return (
    <>
      <SectionItem className={"container"} id={`certificates`}>
        <SectionCenterHead>
          <Heading tag={"h2"}>Подарите обучение близким</Heading>
          <Paragraph fontSize={"small"} className={styles.text} align={"center"}>У&nbsp;нас вы можете приобрести
            подарочные сертификаты
            номиналом
            5&nbsp;000&nbsp;₽,
            10&nbsp;000&nbsp;₽ или&nbsp;15&nbsp;000&nbsp;₽, которыми
            можно оплатить любое обучение в&nbsp;нашем Учебном центре.</Paragraph>
          <InfoButton className={styles.info} type={"button"} onClick={() => changeModalActivityStatus(true)}>Условия
            использования</InfoButton>
        </SectionCenterHead>
        <div className={styles.list}>
          {certificates.map((certificate) => (<Certificate
            onClick={() => {
              setCurrentCertificate(certificate);
            }}
            certificate={certificate}
            key={certificate.id} />))}
        </div>
        {showModal && <TermsOfUseModal setShowModal={changeModalActivityStatus} showModal={showModal} ref={ref} />}
      </SectionItem>
      <OrderModal setCurrentCertificate={setCurrentCertificate} currentCertificate={currentCertificate} />
    </>
  );
};

export default Certificates;
