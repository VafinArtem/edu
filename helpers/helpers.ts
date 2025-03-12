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

export const storePathValues = () => {
  const storage = globalThis?.sessionStorage;
  if (!storage) return;

  // Set the previous path as the value of the current path.
  const prevPath = storage.getItem("currentPath");

  storage.setItem("prevPath", prevPath ?? "/");
  // Set the current path value by looking at the browser's location object.
  storage.setItem("currentPath", globalThis.location.pathname);
};

export function getRandomElements<T>(arr: T[], n: number, allowDuplicates = false) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }

  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("n must be a non-negative integer");
  }

  // Выбор с возможностью повторений
  if (allowDuplicates) {
    return Array.from({length: n}, () => {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    });
  }

  // Выбор уникальных элементов
  if (n > arr.length) {
    throw new Error("n cannot exceed array length when duplicates are not allowed");
  }

  // Алгоритм Фишера-Йетса для перемешивания
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, n);
}
