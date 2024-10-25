import React, {ReactElement} from "react";
import {SpeakerPageProps} from "./speaker-page.props";
import styles from "./speaker-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {similarCourses} from "@/mocs/training";
import {courses, gallery} from "@/mocs/speaker";
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
  const {surname, name, patronymic, specialization, workExperience, promoPhotos, about, edu, examples} = speaker;

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

      {about && <About id={`about`} content={about} />}

      {edu && edu.length > 0 && <div className="container">
        <Edu id={`education`} edu={edu} />
      </div>}

      {examples && <Examples id={`examples`} examples={examples} />}

      <Courses id={`courses`} className={`container`} courses={courses} />

      <Gallery id={`photos`} speakerName={`Юлией`} photos={gallery} />

      <SimilarCourses className={`container`} courses={similarCourses} title={`Рекомендуем`} cardColor={`gray`} />
    </>
  );
};

export default SpeakerPage;
