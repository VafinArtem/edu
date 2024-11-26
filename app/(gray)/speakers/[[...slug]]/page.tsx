import {getSpeakersPage} from "@/api/speakers-page";
import SpeakersPage from "@/views/speakers-page/speakers-page";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Преподаватели центра - Учебный центр Амрита`,
    description: ``,
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
