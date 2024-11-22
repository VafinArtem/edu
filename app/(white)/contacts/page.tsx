import YaMapLoader from "@/components/_location/ya-map-loader/ya-map-loader";
import ContactsPage from "@/views/contacts-page/contacts-page";
import React, {ReactElement} from "react";

const ContactsLayout = async (): Promise<ReactElement | null> => {
  return (
    <>
      <YaMapLoader />
      <ContactsPage />
    </>
  );
};

export default ContactsLayout;
