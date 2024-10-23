import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ru";

dayjs.locale("ru");
dayjs.extend(localizedFormat);

export const formatPrice = (price: number) => new Intl.NumberFormat(`ru-RU`).format(price);

export const formatPhoneNumber = (phone: string) => {
  let updatedPhone = phone;

  updatedPhone = updatedPhone
  .replaceAll(/[^+\d]/g, ``)
  .replaceAll(/^8/g, `+7`)
  .replaceAll(/^7/g, `+7`)
  .replaceAll(/^(\+8)/g, `+7`);

  if (Array.from(updatedPhone.matchAll(/^7|(\+7)|\+/g)).length === 0) {
    updatedPhone = formatPhoneNumber(`+7${updatedPhone}`);
  }

  return updatedPhone;
};

export const getDeclension = (number: number, titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};

export const convertTrainingDates = ({start, end}: {start: number, end?: number}) => {
  const now = dayjs();

  const startDate = dayjs(start * 1000);
  const endDate = end ? dayjs(end * 1000) : undefined;

  if (!end || start === end) {
    return `${startDate.format(`D MMMM${now.year() !== startDate.year() ? " YYYY" : ""}`)}`;
  }

  return `c ${startDate.format(`D${startDate.month() !== endDate?.month() ? " MMMM" : ""}${startDate.year() !== endDate?.year() ? " YYYY" : ""}`)} по ${endDate!.format(`D MMMM${startDate.year() !== endDate?.year() ? " YYYY" : ""}`)}`;
};
