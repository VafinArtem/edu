import React, {ReactElement} from "react";
import styles from "./page.module.css";
import Promo from "@/app/training/components/promo/promo";
import Advantages from "@/app/training/components/advantages/advantages";
import Program from "@/app/training/components/program/program";
import Speakers from "@/app/training/components/speakers/speakers";
import {Speaker} from "@/interfaces/training";
import RecordForm from "@/app/training/components/record-form/record-form";

const speakers: Speaker[] = [
  {
    name: `Волкова Юлия Валерьевна`,
    video: `#`,
    id: `1`,
    photo: `/img/components/speaker/video-poster.png`,
    position: `Стоматолог-хирург, пародонтолог. Главврач клиники Мегаполис Дент`,
    workExperience: `более 25 лет`,
    edu: [
      {
        name: `Диплом «Санкт-Петербургский медицинский университет им. академика И.П. Павлова» 1993 г.`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-1.jpg`
      },
      {
        name: `Сертификат «Стоматология хирургическая» `,
        url: `#`,
        previewImg: `/img/components/speaker/cert-2.jpg`
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`
      }
    ]
  },
  {
    name: `Щербаков Николай Андреевич`,
    id: `1`,
    photo: `/img/components/speaker/speaker-1.png`,
    position: `Стоматолог-хирург, пародонтолог. Главврач клиники Мегаполис Дент`,
    workExperience: `более 25 лет`,
    edu: [
      {
        name: `Диплом «Санкт-Петербургский медицинский университет им. академика И.П. Павлова» 1993 г.`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-1.jpg`
      },
      {
        name: `Сертификат «Стоматология хирургическая» `,
        url: `#`,
        previewImg: `/img/components/speaker/cert-2.jpg`
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`
      }
    ]
  }
]

const ServicePage = async ():  Promise<ReactElement | null> => {
  return (
    <>
      <div className={styles.head}>
        <Promo
          icon={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.49744 4.38521C9.02976 4.10239 8.48723 3.9231 7.85731 3.9231C5.2986 3.9231 3.64625 5.99696 4.76721 10.3038C5.17799 11.8821 6.48729 16.077 7.85731 16.077C8.22597 16.077 8.35826 15.5856 8.52653 14.9607C8.81226 13.8995 9.2017 12.4532 11.0285 12.3736C11.1351 13.5463 11.5674 16.077 12.335 16.077C13.2945 16.077 15.001 12.5 15.626 8.75003C16.2449 5.03635 13.1862 2.54858 10.3545 4.92879C9.97319 5.33693 9.66735 5.78313 9.51463 6.2413C9.4273 6.50327 9.14414 6.64485 8.88217 6.55753C8.6202 6.4702 8.47862 6.18704 8.56594 5.92507C8.75656 5.35322 9.10116 4.83451 9.49744 4.38521Z"
              fill="currentColor" />
          </svg>`}
          courseTypeName={`Мастер-класс`}
        />
        <Advantages />
      </div>
      <Program className={`container`} courseTypeName={`мастер-классе`} />
      <Speakers className={`container`} speakers={speakers} />
      <div className="container">
        <RecordForm />
      </div>
    </>
  );
};

export default ServicePage;
