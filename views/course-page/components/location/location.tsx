"use client";

import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./location.module.css";
import {LocationProps} from "./location.props";

const YaMap = dynamic(async () => await import("./components/ya-map/ya-map"), {
  ssr: false,
});

const Location = ({className, place}: LocationProps): ReactElement | null => {
  const {city, address, metro, desc, photos, position} = place;
  const coordinates: [number, number] = position.toReversed() as [number, number];

  return (
    <>
      <section className={clsx(className, styles.wrapper)}>
        <div className={styles.map}>
          <YaMap coordinates={coordinates} />
        </div>
        <div className={styles.content}>
          <Heading tag={`h2`} className={styles.title}>Место проведения интенсива <span
            className={styles.city}>{city}</span></Heading>
          <address className={styles.address}>{address}</address>
          {metro.station &&
            <Paragraph fontSize={"small"} className={styles.metro}>{metro.icon &&
              <Image src={metro.icon} width={24} height={24}
                alt={`Иконка метро ${city}`} />} {metro.station}</Paragraph>}
          <a href={`https://yandex.ru/maps/?rtext=~${position[0]}%2C${position[1]}`} target="_blank"
            rel="noopener noreferrer" className={styles.direction}>Проложить маршрут</a>
          <div className={styles.contacts}>
            <a href={`mailto:edu@amrita-dent.ru`} className={styles.contact}>edu@amrita-dent.ru</a>
            <a href={`tel:+78005500524`} className={styles.contact}>8-800-550-05-24</a>
          </div>
        </div>

        {(photos || desc) && <div className={styles.footer}>
          {desc && <Paragraph className={styles.desc}>{desc}</Paragraph>}
          {(photos && photos.length > 0) && <div className={styles.photos}>
            {photos.map((photo, index) => (
              <Image className={styles.photo} key={index} src={`${process.env.BACKEND_API}${photo}`} alt={``}
                width={425} height={292} />))}
          </div>}
        </div>}

      </section>
    </>
  );
};

export default Location;
