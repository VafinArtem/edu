import {getSpeakersPage} from "@/api/speakers-page";
import {getRandomElements} from "@/helpers/helpers";
import {SpeakerShortCard} from "@/interfaces/course";
import AboutPage from "@/views/about-page/about-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `О компании — cтоматологический учебный центр Amrita`,
    description: `Стоматологический учебный центр Amrita, проводим курсы, конгрессы, семинары, симпозиумы и другие образовательные программы для стоматологов, зубных техников, ортодонтов, имплантологов, онлайн и оффлайн обучение, запись на сайте или по телефону 8-800-550-05-24`,
  };
}

const ContactsLayout = async (): Promise<ReactElement | null> => {
  const data = await getSpeakersPage();

  return (
    <>
      <AboutPage speakers={data?.answer.data ? getRandomElements<SpeakerShortCard>(data.answer.data, 8) : []} />
    </>
  );
};

export default ContactsLayout;
