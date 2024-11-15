import {coursesEight, courseTypes, directions, directionsWithSpecializations} from "@/mocs/courses";
import Courses from "@/views/main-page/components/courses/courses";
import Directions from "@/views/main-page/components/directions/directions";
import Promo from "@/views/main-page/components/promo/promo";
import React, {ReactElement} from "react";
import AboutLearning from "./components/about-learning/about-learning";
import styles from "./main-page.module.css";
import {MainPageProps} from "./main-page.props";

const MainPage = ({}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      <Courses courseTypes={courseTypes} courses={coursesEight} />
      <Directions directions={directionsWithSpecializations} />
      <AboutLearning />
    </>
  );
};

export default MainPage;
