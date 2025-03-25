import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {convertShortCourseDate} from "@/helpers/dates-helpers";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./top.module.css";
import {TopProps} from "./top.props";

const Top = ({title, titles, description, type, promoImage, date}: TopProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tags}>
        <Paragraph fontSize={"none"} fontWeight={"medium"} className={styles.tag}>{type}</Paragraph>
        <Paragraph fontSize={"none"} fontWeight={"medium"}
          className={styles.date}>{convertShortCourseDate(date)}</Paragraph>
      </div>
      <div className={styles.content}>
        <Heading tag={`h1`} className={styles.title}>{title}</Heading>
        {description && <Paragraph>{description}</Paragraph>}
      </div>
      {promoImage &&
        <Image src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${promoImage}`} alt={``} width={330} height={265}
          className={styles.image} quality={95} priority />}
      <ul className={styles.titles}>
        {titles.map((title) => <li key={title.href} className={styles.titleItem}><a href={title.href}
          className={styles.link}>{title.name}</a></li>)}
      </ul>
    </div>
  );
};

export default Top;
