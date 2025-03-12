import ContainerGray from "@/components/_section/container-gray/container-gray";
import ContainerPrimaryColor from "@/components/_section/container-primary-color/container-primary-color";
import Advantages from "@/views/about-page/components/advantages/advantages";
import Appeal from "@/views/about-page/components/appeal/appeal";
import Certificate from "@/views/about-page/components/certificate/certificate";
import Courses from "@/views/about-page/components/courses/courses";
import Equipment from "@/views/about-page/components/equipment/equipment";
import Promo from "@/views/about-page/components/promo/promo";
import Speakers from "@/views/about-page/components/speakers/speakers";
import Reviews from "@/views/main-page/components/reviews/reviews";
import React, {ReactElement} from "react";
import styles from "./about-page.module.css";
import {AboutPageProps} from "./about-page.props";

const AboutPage = ({speakers}: AboutPageProps): ReactElement | null => {
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
      <ContainerGray className={styles.gray}>
        <Speakers speakers={speakers} />
        <div className="container">
          <Appeal />
        </div>
      </ContainerGray>
      <ContainerPrimaryColor className={styles.purple}>
        <Reviews className={`container`} />
      </ContainerPrimaryColor>
      <Equipment />
    </React.Fragment>
  );
};

export default AboutPage;
