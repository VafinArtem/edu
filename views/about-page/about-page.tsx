import Advantages from "@/views/about-page/components/advantages/advantages";
import Certificate from "@/views/about-page/components/certificate/certificate";
import Courses from "@/views/about-page/components/courses/courses";
import Promo from "@/views/about-page/components/promo/promo";
import React, {ReactElement} from "react";
import styles from "./about-page.module.css";
import {AboutPageProps} from "./about-page.props";

const AboutPage = ({}: AboutPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Promo className={styles.promo} />
      <div className="container">
        <Advantages />
      </div>
      <div className="container">
        <Courses />
      </div>
      <div className="container">
        <Certificate />
      </div>
    </React.Fragment>
  );
};

export default AboutPage;
