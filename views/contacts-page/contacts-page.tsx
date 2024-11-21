import Heading from "@/components/_tags/heading/heading";
import Location from "@/views/contacts-page/components/location/location";
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
    </>
  );
};

export default ContactsPage;
