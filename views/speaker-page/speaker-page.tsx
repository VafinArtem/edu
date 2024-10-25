import React, {ReactElement} from "react";
import {SpeakerPageProps} from "./speaker-page.props";
import styles from "./speaker-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import Promo from "@/views/speaker-page/components/promo/promo";
import Navigation from "@/views/speaker-page/components/navigation/navigation";
import About from "@/views/speaker-page/components/about/about";
import Edu from "@/views/speaker-page/components/edu/edu";
import Examples from "@/views/speaker-page/components/examples/examples";
import Courses from "@/views/speaker-page/components/courses/courses";
import Gallery from "@/views/speaker-page/components/gallery/gallery";
import {NavigationLink} from "@/interfaces/speaker";

const SpeakerPage = ({speaker, similarCourses}: SpeakerPageProps): ReactElement | null => {
  const {
    surname,
    name,
    patronymic,
    specialization,
    specializationFull,
    workExperience,
    promoPhotos,
    about,
    edu,
    examples,
    courses,
    photos,
    colors,
  } = speaker;

  const getNavigationLinks = () => {
    const links: NavigationLink[] = [];

    if (about) {
      links.push({
        name: `О преподавателе`,
        href: `#about`,
      });
    }

    if (edu && edu.length > 0) {
      links.push({
        name: `Образование`,
        href: `#education`,
      });
    }

    if (examples) {
      links.push({
        name: `Рабочие кейсы`,
        href: `#examples`,
      });
    }

    if (courses) {
      links.push({
        name: `Курсы`,
        href: `#courses`,
      });
    }

    if (photos) {
      links.push({
        name: `Фото`,
        href: `#photos`,
      });
    }

    return links;
  };

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`, link: Route.SPEAKERS}, {
        name: `${surname} ${name.nominative} ${patronymic.nominative}`,
      }]} />

      <div className={styles.head}>
        <Promo
          name={`${surname} ${name.nominative} ${patronymic.nominative}`}
          specialization={specialization}
          workExperience={workExperience}
          photos={promoPhotos}
          specializationFull={specializationFull}
          photoBackground={colors.photoBackground}
        />
        <Navigation links={getNavigationLinks()} />
      </div>

      {about && <About id={`about`} content={about} />}

      {edu && edu.length > 0 && <div className="container">
        <Edu id={`education`} edu={edu} />
      </div>}

      {examples && <Examples id={`examples`} examples={examples} />}

      {courses && <Courses
        id={`courses`}
        speakerName={`${name.genitive} ${patronymic.genitive}`}
        className={`container`}
        courses={courses}
      />}

      {photos && <Gallery id={`photos`} speakerName={`Юлией`} photos={photos} />}

      {similarCourses &&
        <SimilarCourses className={`container`} courses={similarCourses} title={`Рекомендуем`} cardColor={`gray`} />}
    </>
  );
};

export default SpeakerPage;
