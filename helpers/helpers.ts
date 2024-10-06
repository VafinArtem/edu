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
