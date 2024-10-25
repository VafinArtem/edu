import React, {ReactElement} from "react";
import {SpeakerPageProps} from "./speaker-page.props";
import styles from "./speaker-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {similarCourses, speakers} from "@/mocs/training";
import {courses, examples, gallery} from "@/mocs/speaker";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import Promo from "@/views/speaker-page/components/promo/promo";
import Navigation from "@/views/speaker-page/components/navigation/navigation";
import About from "@/views/speaker-page/components/about/about";
import Edu from "@/views/speaker-page/components/edu/edu";
import Examples from "@/views/speaker-page/components/examples/examples";
import Courses from "@/views/speaker-page/components/courses/courses";
import Gallery from "@/views/speaker-page/components/gallery/gallery";

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

const SpeakerPage = ({speaker}: SpeakerPageProps): ReactElement | null => {
  const {surname, name, patronymic, specialization, workExperience, promoPhotos} = speaker;

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`, link: Route.SPEAKER}, {
        name: `${surname} ${name.nominative} ${patronymic.nominative}`,
      }]} />

      <div className={styles.head}>
        <Promo
          name={`${surname} ${name.nominative} ${patronymic.nominative}`}
          specialization={specialization}
          workExperience={workExperience}
          photos={promoPhotos}
        />
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
