import Paragraph from "@/components/_tags/paragraph/paragraph";
import {getImageProps} from "next/image";
import React, {ReactElement} from "react";
import styles from "./certificate.module.css";
import {CertificateProps} from "./certificate.props";

const Certificate = ({}: CertificateProps): ReactElement | null => {
  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 750,
    height: 340,
    priority: true,
    src: "/img/components/certificate/diploma-1.png",
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 440,
    height: 271,
    src: "/img/components/certificate/diploma-1.png",
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 648,
    height: 271,
    src: "/img/components/certificate/diploma-1.png",
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 290,
    height: 179,
    src: "/img/components/certificate/diploma-1.png",
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
        <Paragraph fontSize={"none"} className={styles.title}>По&nbsp;окончании обучения вы&nbsp;получите удостоверение
          о&nbsp;повышении квалификации</Paragraph>
        <Paragraph fontSize={"small"} className={styles.text}>С&nbsp;внесением данных в&nbsp;&laquo;Федеральный реестр
          сведений о&nbsp;документах об&nbsp;образовании и&nbsp;квалификации&raquo;.</Paragraph>
        <a href="/pdf/license.pdf" target={"_blank"}
          className={styles.license}>Лицензия &#8470;Л035-01271-78/00637355</a>
      </div>
    </section>
  );
};

export default Certificate;
