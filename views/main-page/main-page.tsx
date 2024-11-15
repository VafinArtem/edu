import {coursesEight, courseTypes, directions, directionsWithSpecializations} from "@/mocs/courses";
import {sixSpeakers} from "@/mocs/speakers";
import Courses from "@/views/main-page/components/courses/courses";
import Directions from "@/views/main-page/components/directions/directions";
import Promo from "@/views/main-page/components/promo/promo";
import React, {ReactElement} from "react";
import NotFindCourse from "../../components/_common/not-find-course/not-find-course";
import AboutLearning from "./components/about-learning/about-learning";
import Speakers from "./components/speakers/speakers";
import styles from "./main-page.module.css";
import {MainPageProps} from "./main-page.props";

const MainPage = ({}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      <Courses courseTypes={courseTypes} courses={coursesEight} />
      <Directions className={styles.directions} directions={directionsWithSpecializations} />
      <AboutLearning className={styles.learning} />
      <NotFindCourse className={styles.notFindCourse} />
      {/*
        Передаем максимум 6 спикеров
      */}
      <Speakers speakers={sixSpeakers} />
    </>
  );
};

export default MainPage;
