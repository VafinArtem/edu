import {getSpeakersPage} from "@/api/speakers-page";
import SpeakersPage from "@/views/speakers-page/speakers-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Преподаватели учебного центра Amrita`,
    description: `Наши преподаватели - проводим семинары, курсы, мастер-классы для стоматологов, врачей общей практики, имплантологов, хирургов, ортопедов, терапевтов, техников, ассистентов и руководителей клиник. Записывайтесь на обучение на сайте или по телефону 8-800-550-05-24`,
  };
}

const SpeakersLayout = async (): Promise<ReactElement | null> => {
  const page = await getSpeakersPage();

  if (!page || page.code !== 200) {
    notFound();
  }

  return (<SpeakersPage speakers={page.answer.data} />);
};

export default SpeakersLayout;
