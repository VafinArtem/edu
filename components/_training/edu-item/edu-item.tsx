import React, {ReactElement} from "react";
import {EduItemProps} from "./edu-item.props";
import styles from "./edu-item.module.css";
import clsx from "clsx";
import Image from "next/image";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import ExternalLink from "@/components/_links/external-link/external-link";

const EduItem = ({className, name, previewImg, url}: EduItemProps): ReactElement | null => {
  return (
    <li className={clsx(styles.wrapper, className)}>
      <Image src={previewImg} alt={``} width={75} height={103} className={styles.img} quality={100} />
      <div className={styles.content}>
        <Paragraph className={styles.name} fontSize={"small"}>{name}</Paragraph>
        <ExternalLink href={url}>Смотреть PDF</ExternalLink>
      </div>
    </li>
  );
};

export default EduItem;
