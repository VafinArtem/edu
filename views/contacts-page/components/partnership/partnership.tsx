import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./partnership.module.css";
import {PartnershipProps} from "./partnership.props";

const Partnership = ({className}: PartnershipProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={`h2`}>По&nbsp;вопросам сотрудничества</Heading>
      <ul className={styles.list}>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/solovyeva-elena.jpg`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Соловьева Елена</span>
              <span className={styles.position}>Руководитель учебного центра</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/konyaeva-olga.jpg`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Коняева Ольга</span>
              <span className={styles.position}>Методист, ведущий специалист ДПО</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/efimova-irina.png`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Ефимова Ирина</span>
              <span className={styles.position}>Офис-менеджер</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/karatkevich-leonid.png`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Караткевич Леонид</span>
              <span className={styles.position}>Менеджер</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/chernolyahova-alla.png`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Черноляхова Алла</span>
              <span className={styles.position}>Менеджер</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/natalya-talyzina.jpg`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Наталья Талызина</span>
              <span className={styles.position}>Менеджер</span>
            </figcaption>
          </figure>
        </li>
        <li className={styles.item}>
          <figure className={styles.picture}>
            <Image src={`/img/contacts-page/partnership/alla-mihaylova.jpg`} alt={``} width={304} height={304}
              quality={95}
              loading={"lazy"}
              className={styles.image} />
            <figcaption className={styles.description}>
              <span className={styles.name}>Алла Михайлова</span>
              <span className={styles.position}>Менеджер</span>
            </figcaption>
          </figure>
        </li>
      </ul>
    </SectionItem>
  );
};

export default Partnership;
