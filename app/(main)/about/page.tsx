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
  return (
    <>
      <AboutPage />
    </>
  );
};

export default ContactsLayout;
