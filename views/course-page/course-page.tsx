"use client";

import Certificate from "@/components/_common/certificate/certificate";
import Pagination from "@/components/_common/pagination/pagination";
import SimilarCourses from "@/components/_common/similar-courses/similar-courses";
import ContainerWhite from "@/components/_section/container-white/container-white";
import {convertCourseDates} from "@/helpers/dates-helpers";
import {getMinTariff, storePathValues} from "@/helpers/helpers";
import {sendMetric} from "@/helpers/metricks";
import {Route} from "@/helpers/route";
import Advantages from "@/views/course-page/components/advantages/advantages";
import Faq from "@/views/course-page/components/faq/faq";
import ForWhom from "@/views/course-page/components/for-whom/for-whom";
import Gallery from "@/views/course-page/components/gallery/gallery";
import Location from "@/views/course-page/components/location/location";
import Price from "@/views/course-page/components/price/price";
import Program from "@/views/course-page/components/program/program";
import Promo from "@/views/course-page/components/promo/promo";
import RecordForm from "@/views/course-page/components/record-form/record-form";
import Schedule from "@/views/course-page/components/schedule/schedule";
import SpeakerCourses from "@/views/course-page/components/speaker-courses/speaker-courses";
import Speakers from "@/views/course-page/components/speakers/speakers";
import {nanoid} from "nanoid";
import {usePathname} from "next/navigation";
import React, {ReactElement, useEffect, useState} from "react";
import styles from "./course-page.module.css";
import {CoursePageProps} from "./course-page.props";

const CoursePage = ({training, similarCourses}: CoursePageProps): ReactElement | null => {
  const [formIsSend, setFormIsSend] = useState<boolean>(false);

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
    forWhom,
    isCertificate,
    audience,
  } = training;

  const pathname = usePathname();

  useEffect(() => {
    storePathValues();
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      sendMetric(`reachGoal`, {options: `course-show`});
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
          speakers={speakers.length > 0 ? speakers.map(({id, name, patronymic, surname, specialization, photo}) => ({
            name: `${surname.nominative} ${name.nominative} ${patronymic.nominative}`,
            specialization,
            photo,
            id,
            photoBackground: colors.photoBackground,
          })) : []}
        />

        {advantages && advantages.length > 0 && <Advantages color={colors.common} advantages={advantages} />}
      </div>

      {(forWhom || audience.length > 0) && <ForWhom
        audience={audience}
        content={forWhom}
        className={`container`}
      />}

      {(program.theory.length > 0 || program.practice.length > 0) &&
        <Program program={program} className={`container`} courseTypeName={typeName.prepositional.toLowerCase()} />}

      <div className="container">
        <RecordForm
          tariffInfo={getMinTariff(tariffs)}
          saleTimestamp={saleTimestamp}
          setFormIsSend={() => setFormIsSend(true)}
          formIsSend={formIsSend}
          courseId={id}
          courseTypeName={typeName.nominative}
          metric={{
            change: `course-min-record-1-change`,
            send: `course-min-record-1-send`,
          }}
          ecommerce={{
            id: nanoid(10),
            name: name,
            category: speakers.map((speaker) => `${speaker.surname.nominative} ${speaker.name.nominative}`).join(" / "),
          }}
        />
      </div>

      {speakers.length > 0 && <Speakers className={`container`} courseTypeName={typeName.nominative.toLowerCase()}
        speakers={speakers.map(({
          position,
          video,
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
          examples,
        }) => ({
          name: `${surname.nominative} ${name.nominative} ${patronymic.nominative}`,
          position,
          specialization,
          edu,
          id,
          video,
          workExperience,
          photo,
          alias,
          cite,
          aboutSlides,
          examples,
          photoBackground: colors.photoBackground,
        }))} />}

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
        ecommerce={{
          id: nanoid(10),
          name: name,
          category: speakers.map((speaker) => `${speaker.surname.nominative} ${speaker.name.nominative}`).join(" / "),
        }}
        courseTypeName={{nominative: typeName.nominative.toLowerCase(), genitive: typeName.genitive.toLowerCase()}}
      />}

      {isCertificate && <div className="container">
        <Certificate courseTypeName={typeName.genitive.toLowerCase()} />
      </div>}

      {photos && photos.length > 0 && <Gallery photos={photos} />}

      <ContainerWhite>
        {(place && city) && <>
          <Location className={`container`} place={{
            position: place.position.map((position) => position.trim()) as [string, string],
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
            setFormIsSend={() => setFormIsSend(true)}
            formIsSend={formIsSend}
            courseTypeName={typeName.nominative}
            showIdAttribute={false}
            metric={{
              change: `course-min-record-2-change`,
              send: `course-min-record-2-send`,
            }}
            ecommerce={{
              id: nanoid(10),
              name: name,
              category: speakers.map((speaker) => `${speaker.surname.nominative} ${speaker.name.nominative}`).join(" / "),
            }}
          />
        </div>

        {speakersCourses && speakersCourses.length > 0 && <SpeakerCourses
          className={`container`}
          courses={speakersCourses}
          speakers={speakers.map((speaker) => ({
            id: speaker.id,
            name: speaker.name.genitive,
            surname: speaker.surname.genitive,
            avatar: speaker.photo,
            photoBackground: colors.photoBackground,
          }))} />}

        {/*<div className="container">*/}
        {/*  <PromoRegistration />*/}
        {/*</div>*/}
      </ContainerWhite>

      {similarCourses && similarCourses.length > 0 && <SimilarCourses
        title={`Может заинтересовать`}
        cardColor={`white`}
        courses={similarCourses}
      />}
    </>
  );
};

export default CoursePage;
