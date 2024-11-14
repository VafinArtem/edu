import React, {ReactElement} from "react";
import {MainPageProps} from "./main-page.props";
import styles from "./main-page.module.css";
import Promo from "@/views/main-page/components/promo/promo";
import {coursesEight, courseTypes, directions, directionsWithSpecializations} from "@/mocs/courses";
import Courses from "@/views/main-page/components/courses/courses";
import Directions from "@/views/main-page/components/directions/directions";

const MainPage = ({}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      <Courses courseTypes={courseTypes} courses={coursesEight} />
      <Directions directions={directionsWithSpecializations} />
    </>
  );
};

export default MainPage;
