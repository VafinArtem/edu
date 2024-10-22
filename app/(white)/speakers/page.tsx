import React, {ReactElement} from "react";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import styles from "./page.module.css";
import Promo from "@/app/(white)/speakers/components/promo/promo";
import Navigation from "@/app/(white)/speakers/components/navigation/navigation";
import About from "@/app/(white)/speakers/components/about/about";
import Edu from "@/app/(white)/speakers/components/edu/edu";
import {similarCourses, speakers} from "@/mocs/training";
import Examples from "@/app/(white)/speakers/components/examples/examples";
import {courses, examples, gallery} from "@/mocs/speaker";
import Courses from "@/app/(white)/speakers/components/courses/courses";
import Gallery from "@/app/(white)/speakers/components/gallery/gallery";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";

const navigationLinks = [
  {
    name: `О преподавателе`,
    href: `#about`,
  },
  {
    name: `Образование`,
    href: `#education`,
  },
  {
    name: `Рабочие кейсы`,
    href: `#examples`,
  },
  {
    name: `Курсы`,
    href: `#courses`,
  },
  {
    name: `Фото`,
    href: `#photos`,
  },
];

const SpeakerPage = async (): Promise<ReactElement | null> => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`, link: Route.SPEAKER}, {
        name: `Волкова Юлия Валерьевна`,
      }]} />

      <div className={styles.head}>
        <Promo />
        <Navigation links={navigationLinks} />
      </div>

      <About id={`about`} content={`<p>Опытный клиницист. С&nbsp;2016 основатель и&nbsp;главный врач стоматологической клиники &laquo;Мегаполис Дент&raquo;, г.&nbsp;Санкт-Петербург.</p>
        <p>Проводит хирургическую реабилитацию с&nbsp;использованием дентальных имплантатов и&nbsp;аугментации костной ткани пациентам с&nbsp;заболеваниями пародонта.</p>
        <p>Преподаватель курса пародонтологии кафедры стоматологии общей практики СПбИНСТОМ. Является автором курсов по&nbsp;терапевтической и&nbsp;хирургической пародонтологии с&nbsp;2005&nbsp;г.</p>
      `} />

      {speakers[0].edu.length > 0 && <div className="container">
        <Edu id={`education`} edu={speakers[0].edu} />
      </div>}

      <Examples id={`examples`} examples={examples} />

      <Courses id={`courses`} className={`container`} courses={courses} />

      <Gallery id={`photos`} speakerName={`Юлией`} photos={gallery} />

      <SimilarCourses className={`container`} courses={similarCourses} title={`Рекомендуем`} cardColor={`gray`} />
    </>
  );
};

export default SpeakerPage;
