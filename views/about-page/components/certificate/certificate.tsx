import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./certificate.module.css";
import {CertificateProps} from "./certificate.props";

const Certificate = ({className}: CertificateProps): ReactElement | null => {
  return (
    <section className={clsx(styles.wrapper, className)}>
      <div className={styles.inner}>
        <Image src={"/img/about-page/certificate/image.png"} alt={""} width={380} height={410}
          className={styles.image} />
        <div className={styles.content}>
          <Heading tag={"h2"} fontSize={"none"} className={styles.title}>Выдаём удостоверение
            государственного образца</Heading>
          <Paragraph>После успешного прохождения программы, мы&nbsp;выдаём документы о&nbsp;повышении квалификации
            в&nbsp;соответствии с
            законом &laquo;Об&nbsp;образовании&raquo;. Данные внвносятся
            в&nbsp;федеральную информационную систему &laquo;Федеральный реестр сведений
            о&nbsp;документах об&nbsp;образовании&nbsp;и (или) о&nbsp;квалификации&raquo;.</Paragraph>
          <a href="/pdf/license.pdf" target={"_blank"}
            className={styles.license}>Лицензия &#8470;Л035-01271-78/00637355</a>
          <Paragraph>Проверить можно на&nbsp;сайте Федеральной службы по&nbsp;надзору в&nbsp;сфере образования
            и&nbsp;науки.</Paragraph>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
