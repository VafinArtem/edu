import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {coursesEight} from "@/mocs/courses";
import AboutCourse from "@/views/one-news-page/components/about-course/about-course";
import CoursesSlider from "@/views/one-news-page/components/courses-slider/courses-slider";
import HowItWas from "@/views/one-news-page/components/how-it-was/how-it-was";
import Speakers from "@/views/one-news-page/components/speakers/speakers";
import Top from "@/views/one-news-page/components/top/top";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./one-news-page.module.css";
import {OneNewsPageProps} from "./one-news-page.props";

const OneNewsPage = ({}: OneNewsPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Новости`, link: Route.NEWS}, {
        name: `Практический курс по эндодонтическому лечению`,
      }]} />
      <div className={styles.wrapper} style={{overflow: `hidden`}}>
        <div className={clsx(styles.page, `container`)}>
          <Top
            title={`Практический курс по эндодонтическому лечению`}
            date={1733462840}
            type={`Курсы, лекции, семинары`}
            description={`19-20 февраля 2023 года в нашем учебном центре «Амрита» прошел авторский практический курс Филипповой Татьяны Владимировны, который был посвящен базовому эндодонтическому лечению.`}
            promoImage={`/img/one-news-page/promo.png`}
            titles={[
              `Как это было`,
              `О курсе`,
              `Ближайшие потоки курса по эндодонтическому лечению`,
              `Преподаватель курса`,
            ]}
          />
          <HowItWas />
          <AboutCourse course={{
            promoDescription: `Курс рассматривает все этапы эндодонтического лечения, начиная с постановки диагноза и планирования лечебных манипуляций, заканчивая герметизацией системы корневых каналов и подготовкой к постэндодонтической реставрации.`,
            "dates": {
              "start": 1734894000,
              "end": 1734980400,
            },
            typeName: {
              "nominative": "Мастер-класс",
              "genitive": "Мастер-класса",
              "prepositional": "Мастер-классе",
            },
            themes: {
              theory: [
                [
                  "Выбор тактики лечения в сложных клинических случаях",
                  "Командное планирование лечения",
                  " Мотивация пациента к проведению лечения",
                  "Коммуникация пародонтолога, хирурга и гигиениста",
                  "Пародонтальная подготовка к имплантации",
                  "Пародонтальная подготовка к ортопедическому лечению",
                ],
              ],
              practice: [
                [
                  "Выбор тактики лечения в сложных клинических случаях",
                  "Командное планирование лечения",
                  " Мотивация пациента к проведению лечения",
                  "Коммуникация пародонтолога, хирурга и гигиениста",
                  "Пародонтальная подготовка к имплантации",
                  "Пародонтальная подготовка к ортопедическому лечению",
                ],
              ],
            },
            courseCard: {
              "id": 1,
              "alias": "klinicheskaya-paradantalogya",
              "name": "Клиническая пародонтология, глубокое погружение. Междисциплинарный подход в лечении пародонтологи-ческих пациентов",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.49744 4.38521C9.02976 4.10239 8.48723 3.9231 7.85731 3.9231C5.2986 3.9231 3.64625 5.99696 4.76721 10.3038C5.17799 11.8821 6.48729 16.077 7.85731 16.077C8.22597 16.077 8.35826 15.5856 8.52653 14.9607C8.81226 13.8995 9.2017 12.4532 11.0285 12.3736C11.1351 13.5463 11.5674 16.077 12.335 16.077C13.2945 16.077 15.001 12.5 15.626 8.75003C16.2449 5.03635 13.1862 2.54858 10.3545 4.92879C9.97319 5.33693 9.66735 5.78313 9.51463 6.2413C9.4273 6.50327 9.14414 6.64485 8.88217 6.55753C8.6202 6.4702 8.47862 6.18704 8.56594 5.92507C8.75656 5.35322 9.10116 4.83451 9.49744 4.38521Z\" fill=\"currentColor\" /></svg>",
              "price": 40000,
              "location": "Санкт-Петербург",
              "dates": {
                "start": 1734894000,
                "end": 1734980400,
              },
              "courseType": {
                "name": "Мастер-класс",
                "color": "#E57027",
                "background": "#F9E4C5",
              },
              "speakers": [
                "Волкова Юлия Валерьевна",
              ],
            },
          }} />
          <CoursesSlider
            title={`Другие курсы преподавателей`}
            courses={coursesEight}
            className={styles.similar}
            cardColor={"white"}
          />
          <Speakers
            courseTypeName={"Мастер-класса"}
            speakers={[
              {
                "id": 1,
                "alias": "volkova-yulia",
                "photo": "/img/course-page/promo/speaker-desktop.png",
                "photoBackground": "#DDDAE3",
                "position": "Главврач клиники Мегаполис Дент",
                "specialization": "Стоматолог-хирург, пародонтолог",
                "surname": {
                  "nominative": "Волкова",
                  "genitive": "Волковой",
                  "instrumental": "",
                },
                "name": {
                  "nominative": "Юлия",
                  "genitive": "Юлии",
                  "instrumental": "",
                },
                "patronymic": {
                  "nominative": "Валерьевна",
                  "genitive": "Валерьевны",
                  "instrumental": "",
                },
              },
            ]} />
        </div>
      </div>

    </React.Fragment>
  );
};

export default OneNewsPage;
