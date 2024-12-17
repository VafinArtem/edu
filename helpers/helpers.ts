import "dayjs/locale/ru";
import {TariffInfo} from "@/interfaces/course";

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

export const getMinTariff = (tariffs: TariffInfo[]) => {
  return tariffs.reduce((previousValue, tariff, currentIndex) => {
    if (currentIndex === 0) {
      return {
        name: tariff.name,
        current: tariff.prices.current,
        old: tariff.prices.old,
        id: tariff.id,
      };
    }

    if (tariff.prices.current < previousValue.current) {
      return {
        name: tariff.name,
        current: tariff.prices.current,
        old: tariff.prices.old,
        id: tariff.id,
      };
    }

    return previousValue;
  }, {
    name: ``,
    current: 0,
    id: null,
  } as {current: number, old?: number, id: number | null, name: string});
};

export const capitalize = (str: string) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};
