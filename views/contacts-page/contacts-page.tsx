"use client";

import Location from "@/components/_common/location/location";
import ReviewForm from "@/components/_common/partner-form/review-form";
import ContainerGray from "@/components/_section/container-gray/container-gray";
import Heading from "@/components/_tags/heading/heading";
import {storePathValues} from "@/helpers/helpers";
import Gallery from "@/views/contacts-page/components/gallery/gallery";
import Geography from "@/views/contacts-page/components/geography/geography";
import Partnership from "@/views/contacts-page/components/partnership/partnership";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import React, {ReactElement, useEffect} from "react";
import styles from "./contacts-page.module.css";
import {ContactsPageProps} from "./contacts-page.props";

const ContactsPage = ({}: ContactsPageProps): ReactElement | null => {
  const pathname = usePathname();

  useEffect(() => {
    storePathValues();
  }, [pathname]);

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
      <ReviewForm className={styles.partnerForm} />
    </>
  );
};

export default ContactsPage;
