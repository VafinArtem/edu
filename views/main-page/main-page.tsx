import React, {ReactElement} from "react";
import {MainPageProps} from "./main-page.props";
import styles from "./main-page.module.css";
import Promo from "@/views/main-page/components/promo/promo";
import {directions} from "@/mocs/courses";

const MainPage = ({}: MainPageProps): ReactElement | null => {
  return (
    <>
      <Promo className={styles.promo} directions={directions} />
    </>
  );
};

export default MainPage;
