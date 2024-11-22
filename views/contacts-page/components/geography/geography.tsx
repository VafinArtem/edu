import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./geography.module.css";
import {GeographyProps} from "./geography.props";

const Geography = ({className}: GeographyProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={"h2"} className={styles.title}>Проводим обучение в&nbsp;разных городах</Heading>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.name}>Санкт-Петербург</span>
          <Image src={`/img/contacts-page/geography/spb.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Москва</span>
          <Image src={`/img/contacts-page/geography/msk.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Екатеринбург</span>
          <Image src={`/img/contacts-page/geography/ekb.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Казань</span>
          <Image src={`/img/contacts-page/geography/kzn.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Нижний новгород</span>
          <Image src={`/img/contacts-page/geography/nng.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
        <li className={styles.item}>
          <span className={styles.name}>Самара</span>
          <Image src={`/img/contacts-page/geography/smr.png`} alt={``} width={79} height={85} className={styles.img} />
        </li>
      </ul>
    </SectionItem>
  );
};

export default Geography;
