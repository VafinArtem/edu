import {convertCourseDates} from "@/helpers/dates-helpers";
import {CourseForPdf, CoursePageModel} from "@/interfaces/course";

export const convertCourseForPdf = (courseForPdf: CoursePageModel): CourseForPdf => {
  const {name, id, colors, typeName, dates, promoDescription, city, speakers} = courseForPdf;

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
    location: city.name ?? "",
    speakers: speakers.map((speaker) => ({
      id: speaker.id,
      name: `${speaker.surname.nominative} ${speaker.name.nominative} ${speaker.patronymic.nominative}`,
      position: speaker.position,
    })),
  };
};
