import Promo from "@/views/about-page/components/promo/promo";
import React, {ReactElement} from "react";
import styles from "./about-page.module.css";
import {AboutPageProps} from "./about-page.props";

const AboutPage = ({}: AboutPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Promo className={styles.promo} />

    </React.Fragment>
  );
};

export default AboutPage;
