import {getDeclension} from "@/helpers/helpers";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";
import {DateRange} from "react-day-picker";

dayjs.locale("ru");
dayjs.extend(localizedFormat);

export const convertCourseDates = ({start, end}: {start?: number, end?: number}) => {
  if (!start) {
    return `Дата уточняется`;
  }

  const now = dayjs();

  const startDate = dayjs(start * 1000);
  const endDate = end ? dayjs(end * 1000) : undefined;

  if (!end || start === end) {
    return `${startDate.format(`D MMMM${now.year() !== startDate.year() ? " YYYY" : ""}`)}`;
  }

  return `c ${startDate.format(`D${startDate.month() !== endDate?.month() ? " MMMM" : ""}${startDate.year() !== endDate?.year() ? " YYYY" : ""}`)} по ${endDate!.format(`D MMMM${startDate.year() !== endDate?.year() ? " YYYY" : ""}`)}`;
};

export const convertShortCourseDate = (date: number) => {
  const now = dayjs();

  const dayjsDate = dayjs(date * 1000);

  return `${dayjsDate.format(`D MMMM${now.year() !== dayjsDate.year() ? " YYYY" : ""}`)}`;
};

export const getWorkExperienceText = (year: number) => {
  const nowYear = dayjs().year();
  const shift = nowYear - year;

  return `${nowYear - year} ${getDeclension(shift, [`год`, `года`, `лет`])}`;
};

export const formatDateFromDatePicker = (dates: DateRange | undefined): string => {
  if (!dates) {
    return ``;
  }

  const fromDate = dayjs(dates.from).format(`DD.MM.YYYY`);
  const toDate = dayjs(dates.to).format(`DD.MM.YYYY`);

  return `${fromDate}${fromDate !== toDate ? ` — ${toDate}` : ``}`;
};

export const formatDateFromDatePickerToHiddenInput = (date: Date | undefined): string => {
  if (!date) {
    return "";
  }

  return dayjs(date).format(`YYYY-MM-DD`);
};

export const getDatesFromSearchParams = ({dateStart, dateEnd}: {
  dateStart?: string,
  dateEnd?: string
}): DateRange | undefined => {
  if (!dateStart && !dateEnd) {
    return;
  }

  const convertedDateStart = dateStart ? new Date(dateStart) : undefined;
  const convertedDateEnd = dateEnd ? new Date(dateEnd) : undefined;

  return {
    from: convertedDateStart,
    to: convertedDateEnd,
  };
};
