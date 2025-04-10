import ReviewsPage from "@/views/reviews-page/reviews-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Отзывы о учебном центре для стоматологов Амрита`,
    description: `Ученики рассказываются о своих впечатлениях о обучении в нашем учебном центре Амрита. Семинары и курсы от лучших лекторов проводим в Санкт-Петербурге и по всей России. Записывайтесь на обучение на сайте или по телефону 8-800-550-05-24`,
  };
}

const ReviewsLayout = async (): Promise<ReactElement | null> => {
  return (<ReviewsPage />);
};

export default ReviewsLayout;
