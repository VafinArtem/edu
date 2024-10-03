import React, {ReactElement} from "react";
import styles from "./page.module.css";
import Promo from "@/app/training/components/promo/promo";
import Advantages from "@/app/training/components/advantages/advantages";
import Program from "@/app/training/components/program/program";
import Speakers from "@/app/training/components/speakers/speakers";
import {DailySchedule, Speaker, TariffInfo} from "@/interfaces/training";
import RecordForm from "@/app/training/components/record-form/record-form";
import Schedule from "@/app/training/components/schedule/schedule";
import {ProgramType, ScheduleType} from "@/helpers/contants";
import Price from "@/app/training/components/price/price";
import Certificate from "@/components/_common/certificate/certificate";

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
        previewImg: `/img/components/speaker/cert-1.jpg`,
      },
      {
        name: `Сертификат «Стоматология хирургическая» `,
        url: `#`,
        previewImg: `/img/components/speaker/cert-2.jpg`,
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`,
      },
    ],
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
        previewImg: `/img/components/speaker/cert-1.jpg`,
      },
      {
        name: `Сертификат «Стоматология хирургическая» `,
        url: `#`,
        previewImg: `/img/components/speaker/cert-2.jpg`,
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`,
      },
      {
        name: `Сертификат «Организация здравоохранения и общественное здоровье»`,
        url: `#`,
        previewImg: `/img/components/speaker/cert-3.jpg`,
      },
    ],
  },
];

const schedule: DailySchedule[] = [
  {
    id: `1`,
    name: `1 день — лекция`,
    time: `с 10:00 до 18:00`,
    type: ProgramType.THEORY,
    list: [
      {name: `Регистрация`, type: ScheduleType.REGISTRATION, time: `09:30 — 10:00`},
      {name: `Лекция`, type: ScheduleType.LECTURE, time: `10:00 — 11:30`},
      {name: `Кофе-брейк`, type: ScheduleType.COFFEE, time: `11:30 — 11:45`},
      {name: `Лекция`, type: ScheduleType.LECTURE, time: `11:45 — 13:15`},
      {name: `Обед`, type: ScheduleType.DINNER, time: `13:15 — 14:00`},
      {name: `Лекция`, type: ScheduleType.LECTURE, time: `14:00 — 15:30`},
      {name: `Кофе-брейк`, type: ScheduleType.COFFEE, time: `15:30 — 15:45`},
      {name: `Лекция`, type: ScheduleType.LECTURE, time: `15:45 — 16:15`},
    ],
  },
  {
    id: `2`,
    name: `2 день — практика`,
    time: `с 10:00 до 18:00`,
    type: ProgramType.PRACTICE,
    list: [
      {name: `Регистрация`, type: ScheduleType.REGISTRATION, time: `09:30 — 10:00`},
      {name: `Практика`, type: ScheduleType.PRACTICE, time: `10:00 — 11:30`},
      {name: `Кофе-брейк`, type: ScheduleType.COFFEE, time: `11:30 — 11:45`},
      {name: `Практика`, type: ScheduleType.PRACTICE, time: `11:45 — 13:15`},
      {name: `Обед`, type: ScheduleType.DINNER, time: `13:15 — 14:00`},
      {name: `Практика`, type: ScheduleType.PRACTICE, time: `14:00 — 15:30`},
      {name: `Кофе-брейк`, type: ScheduleType.COFFEE, time: `15:30 — 15:45`},
      {name: `Практика`, type: ScheduleType.PRACTICE, time: `15:45 — 16:15`},
    ],
  },
];

const tariffs: TariffInfo[] = [
  {
    id: `1`,
    name: `Только лекция`,
    description: `Глубокое погружение в&nbsp;лечение пародонтологических пациентов`,
    prices: {
      current: 16000,
      old: 20000,
    },
    includes: [`Кофе-брейки и обед`, `Сертификат участника`],
  },
  {
    id: `2`,
    name: `Лекция + практика`,
    description: `Глубокое погружение в&nbsp;теоретическую часть  + отработка методов на&nbsp;практике`,
    prices: {
      current: 32000,
      old: 35000,
    },
    includes: [`Кофе-брейки и обед`, `Сертификат полного прохождения интенсива`, `+ Практическая часть`, `+ Раздаточные материалы`],
  },
  {
    id: `3`,
    name: `Свободный слушатель`,
    description: `Глубокое погружение в&nbsp;теоретическую и&nbsp;практическую часть`,
    prices: {
      current: 20000,
      old: 23000,
    },
    includes: [`Кофе-брейки и обед`, `Сертификат полного прохождения интенсива`, `Практическая часть проходит в формате наблюдения за другими учениками`],
  },
];

const ServicePage = async (): Promise<ReactElement | null> => {
  return (
    <>
      <div className={styles.head} style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties}>
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

      <div className="container" style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties}>
        <RecordForm />
      </div>

      <Schedule schedule={schedule} className={`container`} />

      <Price tariffs={tariffs} style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties} />

      <div className="container">
        <Certificate />
      </div>
    </>
  );
};

export default ServicePage;
