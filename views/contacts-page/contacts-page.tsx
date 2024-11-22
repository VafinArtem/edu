import ContainerGray from "@/components/_section/container-gray/container-gray";
import Heading from "@/components/_tags/heading/heading";
import Gallery from "@/views/contacts-page/components/gallery/gallery";
import Geography from "@/views/contacts-page/components/geography/geography";
import Location from "@/views/contacts-page/components/location/location";
import Partnership from "@/views/contacts-page/components/partnership/partnership";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./contacts-page.module.css";
import {ContactsPageProps} from "./contacts-page.props";

const ContactsPage = ({}: ContactsPageProps): ReactElement | null => {
  return (
    <>
      <div className={clsx(styles.head, `container`)}>
        <Heading tag={`h1`} fontSize={"large"}>Контакты</Heading>
        <Location className={styles.location} />
      </div>
      <Gallery />
      <Geography className={`container`} />
      <ContainerGray className={styles.gray}>
        <Partnership className={`container`} />
      </ContainerGray>
    </>
  );
};

export default ContactsPage;
