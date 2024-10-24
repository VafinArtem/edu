import React, {ReactElement} from "react";
import {TrainingPageProps} from "./training-page.props";
import styles from "./training-page.module.css";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {courses, qa, shortSpeakers, similarCourses} from "@/mocs/training";
import Promo from "@/page-components/training-page/components/promo/promo";
import Advantages from "@/page-components/training-page/components/advantages/advantages";
import Program from "@/page-components/training-page/components/program/program";
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
import {convertTrainingDates, getMinTariffPrice} from "@/helpers/helpers";
import Speakers from "@/page-components/training-page/components/speakers/speakers";

const TrainingPage = ({training}: TrainingPageProps): ReactElement | null => {
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
  } = training;

  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Курсы`, link: Route.TRAINING}, {
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
          date={convertTrainingDates(dates)}
          description={promoDescription}
          name={name}
          city={city.name}
          saleTimestamp={saleTimestamp}
          speakers={speakers.map(({id, name, patronymic, surname, specialization, promoPhotos}) => ({
            name: `${surname} ${name.nominative} ${patronymic.nominative}`,
            specialization,
            photos: promoPhotos,
            id,
          }))}
        />

        {advantages && advantages.length > 0 && <Advantages color={colors.common} advantages={advantages} />}
      </div>

      <Program program={program} className={`container`} courseTypeName={typeName.prepositional.toLowerCase()} />

      <Speakers className={`container`} courseTypeName={typeName.nominative.toLowerCase()}
        speakers={speakers.map(({
          position,
          surname,
          name,
          patronymic,
          specialization,
          edu,
          id,
          workExperience,
          promoPhotos,
          aboutSlides,
        }) => ({
          name: `${surname} ${name.nominative} ${patronymic.nominative}`,
          position,
          specialization,
          edu,
          id,
          workExperience,
          photo: promoPhotos.desktop,
          aboutSlides,
        }))} />

      <div className="container">
        <RecordForm prices={getMinTariffPrice(tariffs)} saleTimestamp={saleTimestamp} />
      </div>

      <Schedule
        courseTypeName={typeName.genitive.toLowerCase()}
        schedule={schedule.days}
        text={schedule.description}
        className={`container`}
      />

      <Price
        tariffs={tariffs}
        saleTimestamp={saleTimestamp}
        courseTypeName={{nominative: typeName.nominative.toLowerCase(), genitive: typeName.genitive.toLowerCase()}}
      />

      <div className="container">
        <Certificate courseTypeName={typeName.genitive.toLowerCase()} />
      </div>

      {photos && photos.length > 0 && <Gallery photos={photos} />}

      <ContainerWhite>
        <YaMapLoader />

        {place && <Location className={`container`} place={{
          position: place.position,
          city: city.name,
          metro: {
            station: place.metro,
            icon: city.metroIcon,
          },
          photos: place.photos,
          desc: place.desc,
          address: place.address,
        }} />}

        <Faq qa={qa} className={`container`} />

        <div className="container">
          <RecordForm prices={getMinTariffPrice(tariffs)} saleTimestamp={saleTimestamp} />
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
