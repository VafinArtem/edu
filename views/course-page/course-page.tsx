import Certificate from "@/components/_common/certificate/certificate";
import Pagination from "@/components/_common/pagination/pagination";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import YaMapLoader from "@/components/_location/ya-map-loader/ya-map-loader";
import ContainerWhite from "@/components/_section/container-white/container-white";
import {convertCourseDates} from "@/helpers/dates-helpers";
import {getMinTariff} from "@/helpers/helpers";
import {Route} from "@/helpers/route";
import Advantages from "@/views/course-page/components/advantages/advantages";
import Faq from "@/views/course-page/components/faq/faq";
import Gallery from "@/views/course-page/components/gallery/gallery";
import Location from "@/views/course-page/components/location/location";
import Price from "@/views/course-page/components/price/price";
import Program from "@/views/course-page/components/program/program";
import Promo from "@/views/course-page/components/promo/promo";
import RecordForm from "@/views/course-page/components/record-form/record-form";
import Schedule from "@/views/course-page/components/schedule/schedule";
import SpeakerCourses from "@/views/course-page/components/speaker-courses/speaker-courses";
import Speakers from "@/views/course-page/components/speakers/speakers";
import React, {ReactElement} from "react";
import styles from "./course-page.module.css";
import {CoursePageProps} from "./course-page.props";

const CoursePage = ({training, similarCourses}: CoursePageProps): ReactElement | null => {
  const {
    name,
    colors,
    typeName,
    typeIcon,
    promoDescription,
    saleTimestamp,
    dates,
    city,
    speakers,
    advantages,
    program,
    tariffs,
    schedule,
    photos,
    place,
    qa,
    speakersCourses,
    id,
  } = training;

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`, link: Route.COURSES}, {
        name,
      }]} />

      <div className={styles.head} style={{
        "--course-color": colors.common,
        "--course-blur": saleTimestamp ? colors.blur : ``,
        "--course-text": colors.text,
      } as React.CSSProperties}>
        <Promo
          icon={typeIcon}
          courseTypeName={typeName.nominative}
          date={convertCourseDates(dates)}
          description={promoDescription}
          name={name}
          city={city.name}
          saleTimestamp={saleTimestamp}
          speakers={speakers.map(({id, name, patronymic, surname, specialization, photo}) => ({
            name: `${surname} ${name.nominative} ${patronymic.nominative}`,
            specialization,
            photo,
            id,
            photoBackground: colors.photoBackground,
          }))}
        />

        {advantages && advantages.length > 0 && <Advantages color={colors.common} advantages={advantages} />}
      </div>

      {(program.theory || program.practice) &&
        <Program program={program} className={`container`} courseTypeName={typeName.prepositional.toLowerCase()} />}

      <div className="container">
        <RecordForm
          tariffInfo={getMinTariff(tariffs)}
          saleTimestamp={saleTimestamp}
          courseId={id}
          courseTypeName={typeName.nominative}
        />
      </div>

      <Speakers className={`container`} courseTypeName={typeName.nominative.toLowerCase()}
        speakers={speakers.map(({
          position,
          surname,
          name,
          patronymic,
          specialization,
          edu,
          id,
          alias,
          cite,
          workExperience,
          photo,
          aboutSlides,
        }) => ({
          name: `${surname} ${name.nominative} ${patronymic.nominative}`,
          position,
          specialization,
          edu,
          id,
          workExperience,
          photo,
          alias,
          cite,
          aboutSlides,
          photoBackground: colors.photoBackground,
        }))} />

      {schedule.days.length > 0 && <Schedule
        courseTypeName={typeName.genitive.toLowerCase()}
        schedule={schedule.days}
        text={schedule.description}
        className={`container`}
      />}

      {(tariffs && tariffs.length > 0) && <Price
        courseId={id}
        tariffs={tariffs}
        saleTimestamp={saleTimestamp}
        courseTypeName={{nominative: typeName.nominative.toLowerCase(), genitive: typeName.genitive.toLowerCase()}}
      />}

      <div className="container">
        <Certificate courseTypeName={typeName.genitive.toLowerCase()} />
      </div>

      {photos && photos.length > 0 && <Gallery photos={photos} />}

      <ContainerWhite>
        {(place && city) && <>
          <YaMapLoader />
          <Location className={`container`} place={{
            position: place.position,
            city: city.name,
            metro: {
              station: place.metro,
              icon: city.metroIcon ? `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${city.metroIcon}` : undefined,
            },
            photos: place.photos,
            desc: place.desc,
            address: place.address,
          }} />
        </>}

        {qa && qa.length > 0 && <Faq qa={qa} className={`container`} />}

        <div className="container">
          <RecordForm
            tariffInfo={getMinTariff(tariffs)}
            saleTimestamp={saleTimestamp}
            courseId={id}
            courseTypeName={typeName.nominative}
          />
        </div>

        {speakersCourses && speakersCourses.length > 0 && <SpeakerCourses
          className={`container`}
          courses={speakersCourses}
          speakers={speakers.map((speaker) => ({
            id: speaker.id,
            name: speaker.name.genitive,
            avatar: speaker.photo,
            photoBackground: colors.photoBackground,
          }))} />}

        {/*<div className="container">*/}
        {/*  <PromoRegistration />*/}
        {/*</div>*/}
      </ContainerWhite>

      {similarCourses && similarCourses.length > 0 && <SimilarCourses
        className={`container`}
        title={`Может заинтересовать`}
        cardColor={`white`}
        courses={similarCourses} />}
    </>
  );
};

export default CoursePage;
