import {getSpeakersPage} from "@/api/speakers-page";
import {getRandomElements} from "@/helpers/helpers";
import {SpeakerShortCard} from "@/interfaces/course";
import AboutPage from "@/views/about-page/about-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `О компании — учебный центр для врачей-стоматологов Amrita`,
    description: ``,
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
