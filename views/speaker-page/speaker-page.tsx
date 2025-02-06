"use client";

import Pagination from "@/components/_common/pagination/pagination";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import {storePathValues} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import {NavigationLink} from "@/interfaces/speaker";
import About from "@/views/speaker-page/components/about/about";
import Courses from "@/views/speaker-page/components/courses/courses";
import Edu from "@/views/speaker-page/components/edu/edu";
import Examples from "@/views/speaker-page/components/examples/examples";
import Gallery from "@/views/speaker-page/components/gallery/gallery";
import Navigation from "@/views/speaker-page/components/navigation/navigation";
import Promo from "@/views/speaker-page/components/promo/promo";
import {usePathname} from "next/navigation";
import React, {ReactElement, useEffect} from "react";
import styles from "./speaker-page.module.css";
import {SpeakerPageProps} from "./speaker-page.props";

const SpeakerPage = ({speaker, similarCourses}: SpeakerPageProps): ReactElement | null => {
  const pathname = usePathname();

  useEffect(() => {
    storePathValues();
  }, [pathname]);

  const {
    surname,
    name,
    patronymic,
    specialization,
    specializationFull,
    workExperience,
    photo,
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

    if (examples && examples.length > 0) {
      links.push({
        name: `Рабочие кейсы`,
        href: `#examples`,
      });
    }

    if (courses && courses.length > 0) {
      links.push({
        name: `Курсы`,
        href: `#courses`,
      });
    }

    if (photos && photos.length > 0) {
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
        name: `${surname.nominative} ${name.nominative} ${patronymic.nominative}`,
      }]} />

      <div className={styles.head}>
        <Promo
          name={`${surname.nominative} ${name.nominative} ${patronymic.nominative}`}
          specialization={specialization}
          workExperience={workExperience}
          photo={photo}
          specializationFull={specializationFull}
          photoBackground={colors.photoBackground}
          showCourses={Boolean(courses && courses.length > 0)}
        />
        <Navigation links={getNavigationLinks()} />
      </div>

      {about && <About id={`about`} content={about} />}

      {edu && edu.length > 0 && <div className="container">
        <Edu id={`education`} edu={edu} />
      </div>}

      {examples && examples.length > 0 && <Examples id={`examples`} examples={examples} />}

      {courses && courses.length > 0 && <Courses
        id={`courses`}
        speakerName={`${name.genitive} ${patronymic.genitive}`}
        className={`container`}
        courses={courses}
      />}

      {photos && photos.length > 0 && <Gallery id={`photos`}
        speakerName={`${speaker.name.instrumental}${speaker.surname.instrumental ? ` ${speaker.surname.instrumental}` : ``}`}
        photos={photos} />}

      {similarCourses && similarCourses.length > 0 &&
        <SimilarCourses courses={similarCourses} title={`Рекомендуем`} cardColor={`gray`} />}
    </>
  );
};

export default SpeakerPage;
