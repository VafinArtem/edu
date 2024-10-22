import React, {ReactElement} from "react";
import {TrainingPageProps} from "./training-page.props";
import styles from "./training-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {courses, place, qa, schedule, shortSpeakers, similarCourses, speakers, tariffs} from "@/mocs/training";
import Promo from "@/page-components/training-page/components/promo/promo";
import Advantages from "@/page-components/training-page/components/advantages/advantages";
import Program from "@/page-components/training-page/components/program/program";
import Speakers from "@/page-components/training-page/components/speakers/speakers";
import RecordForm from "@/page-components/training-page/components/record-form/record-form";
import Schedule from "@/page-components/training-page/components/schedule/schedule";
import Price from "@/page-components/training-page/components/price/price";
import Certificate from "@/components/_common/certificate/certificate";
import Gallery from "@/page-components/training-page/components/gallery/gallery";
import ContainerWhite from "@/components/_training/container-white/container-white";
import YaMapLoader from "@/components/_common/ya-map-loader/ya-map-loader";
import Faq from "@/page-components/training-page/components/faq/faq";
import SpeakerCourses from "@/page-components/training-page/components/speaker-courses/speaker-courses";
import PromoRegistration from "@/components/_common/promo-registration/promo-registration";
import Location from "@/page-components/training-page/components/location/location";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";

const TrainingPage = ({training}: TrainingPageProps): ReactElement | null => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`, link: Route.TRAINING}, {
        name: training.name,
      }]} />
      
      <div className={styles.head} style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties}>
        <Promo
          icon={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.49744 4.38521C9.02976 4.10239 8.48723 3.9231 7.85731 3.9231C5.2986 3.9231 3.64625 5.99696 4.76721 10.3038C5.17799 11.8821 6.48729 16.077 7.85731 16.077C8.22597 16.077 8.35826 15.5856 8.52653 14.9607C8.81226 13.8995 9.2017 12.4532 11.0285 12.3736C11.1351 13.5463 11.5674 16.077 12.335 16.077C13.2945 16.077 15.001 12.5 15.626 8.75003C16.2449 5.03635 13.1862 2.54858 10.3545 4.92879C9.97319 5.33693 9.66735 5.78313 9.51463 6.2413C9.4273 6.50327 9.14414 6.64485 8.88217 6.55753C8.6202 6.4702 8.47862 6.18704 8.56594 5.92507C8.75656 5.35322 9.10116 4.83451 9.49744 4.38521Z"
              fill="currentColor" />
          </svg>`}
          courseTypeName={`Мастер-класс`}
        />

        <Advantages />
      </div>

      <Program className={`container`} courseTypeName={`мастер-классе`} />

      <Speakers className={`container`} speakers={speakers} />

      <div className="container" style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties}>
        <RecordForm />
      </div>

      <Schedule schedule={schedule} className={`container`} />

      <Price tariffs={tariffs} style={{
        "--course-color": `#254885`,
        "--course-blur": `#3A68B7`,
      } as React.CSSProperties} />

      <div className="container">
        <Certificate />
      </div>

      <Gallery
        photos={[
          `/img/components/gallery/img-1.png`,
          `/img/components/gallery/img-2.png`,
          `/img/components/gallery/img-3.png`,
          `/img/components/gallery/img-4.png`,
          `/img/components/gallery/img-5.png`,
          `/img/components/gallery/img-6.png`,
        ]} />

      <ContainerWhite>
        <YaMapLoader />

        <Location className={`container`} place={place} />

        <Faq qa={qa} className={`container`} />

        <div className="container" style={{
          "--course-color": `#254885`,
          "--course-blur": `#3A68B7`,
        } as React.CSSProperties}>
          <RecordForm />
        </div>

        <SpeakerCourses className={`container`} courses={courses} speakers={shortSpeakers} />

        <div className="container">
          <PromoRegistration />
        </div>
      </ContainerWhite>

      <SimilarCourses className={`container`} title={`Может заинтересовать`} cardColor={`white`}
        courses={similarCourses} />
    </>
  );
};

export default TrainingPage;
