import PromoRegistration from "@/components/_common/promo-registration/promo-registration";
import ContainerPrimaryColor from "@/components/_section/container-primary-color/container-primary-color";
import {coursesEight, courseTypes, directions, directionsWithSpecializations} from "@/mocs/courses";
import {sixSpeakers} from "@/mocs/speakers";
import About from "@/views/main-page/components/about/about";
import Courses from "@/views/main-page/components/courses/courses";
import Directions from "@/views/main-page/components/directions/directions";
import Promo from "@/views/main-page/components/promo/promo";
import Reviews from "@/views/main-page/components/reviews/reviews";
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
      <div className="container">
        <PromoRegistration />
      </div>
      <ContainerPrimaryColor>
        <About className={`container`} />
        <Reviews className={`container`} />
      </ContainerPrimaryColor>
    </>
  );
};

export default MainPage;
