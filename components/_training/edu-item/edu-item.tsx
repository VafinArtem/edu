import React, {ReactElement} from "react";
import {EduItemProps} from "./edu-item.props";
import styles from "./edu-item.module.css";
import clsx from "clsx";
import Image from "next/image";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import ExternalLink from "@/components/_links/external-link/external-link";

const EduItem = ({className, name, previewImg, url, color = "primary"}: EduItemProps): ReactElement | null => {
  return (
    <li className={clsx(styles.wrapper, className, {
      [styles.primary]: color === "primary",
      [styles.white]: color === "white",
    })}>
      <Image src={previewImg} alt={``} width={75} height={103} className={styles.img} quality={100} />
      <div className={styles.content}>
        <Paragraph className={styles.name} fontWeight={"light"} fontSize={"small"}>{name}</Paragraph>
        <ExternalLink href={url} component={"a"} target={`_blank`} className={styles.link} color={color}>Смотреть
          PDF</ExternalLink>
      </div>
    </li>
  );
};

export default EduItem;
