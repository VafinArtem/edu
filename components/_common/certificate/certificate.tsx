import React, {ReactElement} from "react";
import {CertificateProps} from "./certificate.props";
import styles from "./certificate.module.css";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {getImageProps} from "next/image";

const Certificate = ({courseTypeName}: CertificateProps): ReactElement | null => {
  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 750,
    height: 340,
    priority: true,
    src: "/img/components/certificate/diploma.png",
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 440,
    height: 271,
    src: "/img/components/certificate/diploma.png",
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 648,
    height: 271,
    src: "/img/components/certificate/diploma.png",
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 290,
    height: 179,
    src: "/img/components/certificate/diploma.png",
  });

  return (
    <section className={styles.wrapper}>
      <h2 className="visually-hidden">Удостоверение</h2>
      <picture className={styles.pict}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={290} height={179} alt={``} className={styles.image} />
      </picture>
      <div className={styles.content}>
        <Paragraph fontSize={"none"} className={styles.title}>По&nbsp;окончанию {courseTypeName} вы&nbsp;получите
          удостоверение государственного образца</Paragraph>
        <Paragraph fontSize={"small"} className={styles.text}>Данные в&nbsp;нём будут внесены в&nbsp;&laquo;Федеральный
          реестр сведений
          о&nbsp;документах об&nbsp;образовании и&nbsp;квалификации&raquo;</Paragraph>
        <a href="#" target={"_blank"} className={styles.license}>Лицензия &#8470;Л035-01271-78/00637355</a>
      </div>
    </section>
  );
};

export default Certificate;
