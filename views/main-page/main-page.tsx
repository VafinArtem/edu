import ContainerPrimaryColor from "@/components/_section/container-primary-color/container-primary-color";
import ContainerWhite from "@/components/_section/container-white/container-white";
import About from "@/views/main-page/components/about/about";
import Courses from "@/views/main-page/components/courses/courses";
import Footer from "@/views/main-page/components/footer/footer";
import Promo from "@/views/main-page/components/promo/promo";
import Reviews from "@/views/main-page/components/reviews/reviews";
import React, {ReactElement} from "react";
import NotFindCourse from "../../components/_common/not-find-course/not-find-course";
import AboutLearning from "./components/about-learning/about-learning";
import Speakers from "./components/speakers/speakers";
import styles from "./main-page.module.css";
import {MainPageProps} from "./main-page.props";

const MainPage = ({directions, speakers, courses}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      {courses.length > 0 && <Courses courses={courses} />}

      {/*<Directions className={styles.directions} directions={directionsWithSpecializations} />*/}

      <AboutLearning className={styles.learning} />
      <NotFindCourse className={styles.notFindCourse} />
      {speakers.length > 0 && <Speakers speakers={speakers} />}

      {/*<div className="container">*/}
      {/*  <PromoRegistration />*/}
      {/*</div>*/}

      <ContainerPrimaryColor className={styles.purple}>
        <About className={`container`} />
        <Reviews className={`container`} />

      </ContainerPrimaryColor>
      <ContainerWhite className={styles.white}>
        {/*<div className="container">*/}
        {/*  <Subscribe />*/}
        {/*</div>*/}
        <Footer />
      </ContainerWhite>
    </>
  );
};

export default MainPage;
