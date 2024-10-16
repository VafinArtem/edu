import React, {ReactElement} from "react";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import styles from "./page.module.css";
import Promo from "@/app/(white)/speakers/components/promo/promo";
import Navigation from "@/app/(white)/speakers/components/navigation/navigation";

const SpeakerPage = async (): Promise<ReactElement | null> => {
  return (
    <>
      <Pagination className={`container`} pagination={[{name: `Преподаватели`, link: Route.SPEAKER}, {
        name: `Волкова Юлия Валерьевна`,
      }]} />

      <div className={styles.head}>
        <Promo />
        <Navigation />
      </div>

    </>
  );
};

export default SpeakerPage;
