"use client";

import YaDirectionButton from "@/components/_buttons/ya-direction-button/ya-direction-button";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./location.module.css";
import {LocationProps} from "./location.props";

const YaMap = dynamic(async () => await import("@/components/_location/ya-map/ya-map"), {
  ssr: false,
});

const Location = ({className, place}: LocationProps): ReactElement | null => {
  const {city, address, metro, desc, photos, position} = place;
  const coordinates: [string, string] = position ? position.toReversed() as [string, string] : ["0", "0"];
  
  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={styles.map}>
        <YaMap coordinates={coordinates} />
      </div>
      <div className={styles.content}>
        <Heading tag={`h2`} className={styles.title}>Место проведения <span
          className={styles.city}>{city}</span></Heading>
        <address className={styles.address}>{address}</address>
        {metro.station &&
          <Paragraph fontSize={"small"} className={styles.metro}>{metro.icon &&
            <Image src={metro.icon} width={24} height={24}
              alt={`Иконка метро ${city}`} />} {metro.station}</Paragraph>}
        <YaDirectionButton backgroundColor={"primary"} position={position} className={styles.direction} />
        <div className={styles.contacts}>
          <a href={`mailto:edu@amrita-dent.ru`} className={styles.contact}>edu@amrita-dent.ru</a>
          <a href={`tel:+78005500524`} className={styles.contact}>8-800-550-05-24</a>
        </div>
      </div>

      {((photos && photos.length > 0) || desc) && <div className={styles.footer}>
        {desc && <div className={styles.desc} dangerouslySetInnerHTML={{__html: desc}} />}
        {(photos && photos.length > 0) && <div className={styles.photos}>
          {photos.map((photo, index) => (
            <Image className={styles.photo} key={index} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${photo}`}
              alt={``}
              width={425} height={292} />))}
        </div>}
      </div>}

    </section>
  );
};

export default Location;
