import PaymentPage from "@/views/payment-page/payment-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Способы оплаты, скидки и акционные предложения в учебном центре Амрита`,
    description: `Скидки для групп, студентов и ординаторов, описание способов оплаты курсов в стоматологическом учебном центре Амрита. Курсы, вебинары и мастер классы для стоматологов, записывайтесь на сайте или по телефону 8-800-550-05-24`,
  };
}

const PaymentLayout = async (): Promise<ReactElement | null> => {
  return (<PaymentPage />);
};

export default PaymentLayout;
