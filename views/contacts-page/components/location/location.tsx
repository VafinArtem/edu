"use client";

import YaDirectionButton from "@/components/_buttons/ya-direction-button/ya-direction-button";
import SocialItem from "@/components/_social/social-item/social-item";
import Social from "@/components/_social/social/social";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./location.module.css";
import {LocationProps} from "./location.props";
import IconVK from "./vkontakte.svg";
import IconYouTube from "./youtube.svg";

const YaMap = dynamic(async () => await import("@/components/_location/ya-map/ya-map"), {
  ssr: false,
});

const Location = ({className}: LocationProps): ReactElement | null => {
  return (
    <section className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <Paragraph fontSize={"asDefaultTitle"} className={styles.title}>Находимся <br className={styles.noTablet} />
          в&nbsp;Санкт-Петербурге</Paragraph>
        <address className={styles.address}>Московский проспект, дом 183-185, Учебный центр Амрита, помещение 800-H
        </address>
        <Paragraph className={styles.workHours}>Режим работы: Пн-чт 09:00 — 18:00; Пт 09:00 — 17:00</Paragraph>
        <YaDirectionButton backgroundColor={"white"} position={[59.856994, 30.317404]} className={styles.direction} />
        <div className={styles.footer}>
          <div className={styles.contacts}>
            <a href={`tel:+78005500524`} className={styles.contact}>8-800-550-05-24</a>
            <a href={`mailto:edu@amrita-dent.ru`} className={styles.contact}>edu@amrita-dent.ru</a>
          </div>
          <Social className={styles.social}>
            <SocialItem
              className={styles.socialItem}
              href={`https://www.youtube.com/channel/UCsWR0CGP1OLaQTFA0iEg61Q`}
              aria-label={`YouTube`}
              icon={(className: string) => <IconYouTube className={className} width={58} height={58} />}
            />
            <SocialItem
              className={styles.socialItem}
              href={`https://vk.com/amritadent`}
              aria-label={`Вконтакте`}
              icon={(className: string) => <IconVK className={className} width={58} height={58} />}
            />
          </Social>
        </div>
      </div>
      <div className={styles.map}>
        <YaMap showMarker markerCoordinates={[30.317270, 59.857463]} coordinates={[30.317404, 59.856994]} />
      </div>
    </section>
  );
};

export default Location;
