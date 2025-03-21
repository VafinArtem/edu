import NotFindCourse from "@/components/_common/not-find-course/not-find-course";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import AboutCourse from "@/views/one-news-page/components/about-course/about-course";
import CoursesSlider from "@/views/one-news-page/components/courses-slider/courses-slider";
import HowItWas from "@/views/one-news-page/components/how-it-was/how-it-was";
import Speakers from "@/views/one-news-page/components/speakers/speakers";
import Top from "@/views/one-news-page/components/top/top";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./one-news-page.module.css";
import {OneNewsPageProps} from "./one-news-page.props";

const OneNewsPage = ({news, courses}: OneNewsPageProps): ReactElement | null => {
  const {name, date, type, description, promoImage, howItWas, images, courseInfo} = news;

  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Новости`, link: Route.NEWS}, {
        name,
      }]} />
      <div className={styles.wrapper} style={{overflow: `hidden`}}>
        <div className={clsx(styles.page, `container`)}>
          <Top
            title={name}
            date={date}
            type={type}
            description={description}
            promoImage={promoImage}
            titles={[
              `Как это было`,
              `О курсе`,
              `Ближайшие потоки курса по эндодонтическому лечению`,
              `Преподаватель курса`,
            ]}
          />
          <HowItWas content={howItWas} images={images} />
          {courseInfo && <>
            <AboutCourse course={{
              promoDescription: courseInfo.promoDescription,
              dates: courseInfo.dates,
              typeName: courseInfo.typeName,
              themes: courseInfo.themes,
              courseCard: courseInfo.courseCard,
            }} />
            {courseInfo.speakerCourses && <CoursesSlider
              title={
                `Другие курсы ${courseInfo.speakers.length > 0 ?
                  `преподавателей` :
                  `${courseInfo.speakers[0].surname.instrumental} ${courseInfo.speakers[0].name.instrumental} ${courseInfo.speakers[0].patronymic.instrumental}`
                }`}
              courses={courseInfo.speakerCourses}
              className={styles.similar}
              cardColor={"white"}
            />}
            {courseInfo.speakers && <Speakers
              courseTypeName={courseInfo.typeName.nominative}
              speakers={courseInfo.speakers}
            />}
          </>}
        </div>
      </div>

      {courses.length > 0 && <div className={clsx(styles.page, styles.white, `container`)} style={{overflow: `hidden`}}>
        <CoursesSlider
          title={`Ближайшие курсы`}
          courses={courses}
          className={styles.similar}
          cardColor={"gray"}
        />
      </div>}

      <NotFindCourse className={styles.notFindCourse} />

    </React.Fragment>
  );
};

export default OneNewsPage;
