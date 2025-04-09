import {convertCourseDates} from "@/helpers/dates-helpers";
import {CourseForPdf, CoursePageModel} from "@/interfaces/course";

export const convertCourseForPdf = (courseForPdf: CoursePageModel): CourseForPdf => {
  const {name, id, colors, typeName, dates, promoDescription, city, speakers, program, schedule, place} = courseForPdf;

  return {
    id,
    name,
    colors: {
      background: colors.common,
      text: colors.text,
    },
    typeName,
    date: convertCourseDates(dates),
    description: promoDescription,
    location: {
      city: city.name ?? "",
      metro: place?.metro ?? "",
      address: place?.address ?? "",
    },
    speakers: speakers.map((speaker) => ({
      id: speaker.id,
      name: `${speaker.surname.nominative} ${speaker.name.nominative} ${speaker.patronymic.nominative}`,
      position: speaker.position,
    })),
    program: {
      theory: program.theory,
      practice: program.practice,
    },
    schedule: schedule.days,
  };
};
