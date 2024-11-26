import YaMapLoader from "@/components/_location/ya-map-loader/ya-map-loader";
import ContactsPage from "@/views/contacts-page/contacts-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Контакты - Учебный центр Амрита`,
    description: ``,
  };
}

const ContactsLayout = async (): Promise<ReactElement | null> => {
  return (
    <>
      <YaMapLoader />
      <ContactsPage />
    </>
  );
};

export default ContactsLayout;
