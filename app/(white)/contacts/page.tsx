import ContactsPage from "@/views/contacts-page/contacts-page";
import {Metadata} from "next";
import React, {ReactElement} from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Контакты — учебный центр для врачей-стоматологов Amrita`,
    description: `Контакты учебного центра для Amrita - Семинары, курсы, мастер-классы для стоматологов, врачей общей практики, имплантологов, хирургов, ортопедов, терапевтов, техников, ассистентов и руководителей клиник. Записывайтесь на обучение на сайте или по телефону 8-800-550-05-24`,
  };
}

const ContactsLayout = async (): Promise<ReactElement | null> => {
  return (
    <>
      <ContactsPage />
    </>
  );
};

export default ContactsLayout;
