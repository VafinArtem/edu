import Button from "@/components/_buttons/button/button";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {formatPrice} from "@/helpers/helpers";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./certificate.module.css";
import {CertificateProps} from "./certificate.props";

const Certificate = ({certificate, onClick}: CertificateProps): ReactElement | null => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.top}>
        <Image src={`/img/certificates/${certificate.price}.png`} width={600} height={322} alt={``}
          className={styles.img} />
      </div>
      <div className={styles.content}>
        <Paragraph className={clsx(styles.text, styles.full)} fontWeight={"medium"}
          fontSize={"none"}>{certificate.name}</Paragraph>
        <Paragraph className={styles.price} fontWeight={"medium"}
          fontSize={"none"}>{formatPrice(certificate.price)}&nbsp;₽</Paragraph>
        <Button size={"small"} type={"button"} onClick={() => onClick()}>Забронировать</Button>
      </div>
    </article>
  );
};

export default Certificate;
