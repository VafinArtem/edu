import React, {ReactElement} from "react";
import {MainPageProps} from "./main-page.props";
import styles from "./main-page.module.css";
import Promo from "@/views/main-page/components/promo/promo";
import {coursesEight, courseTypes, directions} from "@/mocs/courses";
import Courses from "@/views/main-page/components/courses/courses";

const MainPage = ({}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      <Courses courseTypes={courseTypes} courses={coursesEight} />
    </>
  );
};

export default MainPage;
