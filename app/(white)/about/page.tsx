import AboutPage from "@/views/about-page/about-page";
import Advantages from "@/views/about-page/components/advantages/advantages";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `О компании — учебный центр для врачей-стоматологов Amrita`,
    description: ``,
  };
}

const ContactsLayout = async (): Promise<ReactElement | null> => {
  return (
    <>
      <AboutPage />
      <Advantages className={"container"} />
    </>
  );
};

export default ContactsLayout;
