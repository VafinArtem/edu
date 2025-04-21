"use client";

import Reviews from "@/components/_reviews/reviews/reviews";
import ContainerPrimaryColor from "@/components/_section/container-primary-color/container-primary-color";
import ContainerWhite from "@/components/_section/container-white/container-white";
import {storePathValues} from "@/helpers/helpers";
import About from "@/views/main-page/components/about/about";
import Courses from "@/views/main-page/components/courses/courses";
import Directions from "@/views/main-page/components/directions/directions";
import Footer from "@/views/main-page/components/footer/footer";
import Promo from "@/views/main-page/components/promo/promo";
import {usePathname} from "next/navigation";
import React, {ReactElement, useEffect} from "react";
import NotFindCourse from "../../components/_common/not-find-course/not-find-course";
import AboutLearning from "./components/about-learning/about-learning";
import Speakers from "./components/speakers/speakers";
import styles from "./main-page.module.css";
import {MainPageProps} from "./main-page.props";

const MainPage = ({directions, speakers, courses}: MainPageProps): ReactElement | null => {
  const pathname = usePathname();

  useEffect(() => {
    storePathValues();
  }, [pathname]);

  return (
    <>
      <Promo className={styles.promo} directions={directions} />
      {courses.length > 0 && <Courses courses={courses} />}

      {directions.length > 0
        && directions.some((direction) => direction.audience.length > 0)
        && <Directions className={styles.directions}
          directions={directions.filter((direction) => direction.audience.length > 0)} />}

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
