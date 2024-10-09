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
