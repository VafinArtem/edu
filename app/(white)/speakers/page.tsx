import React, {ReactElement} from "react";
import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import styles from "./page.module.css";
import Promo from "@/app/(white)/speakers/components/promo/promo";
import Navigation from "@/app/(white)/speakers/components/navigation/navigation";
import About from "@/app/(white)/speakers/components/about/about";
import Edu from "@/app/(white)/speakers/components/edu/edu";
import {speakers} from "@/mocs/training";
import Examples from "@/app/(white)/speakers/components/examples/examples";
import {examples} from "@/mocs/speaker";

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

      <About content={`<p>Опытный клиницист. С&nbsp;2016 основатель и&nbsp;главный врач стоматологической клиники &laquo;Мегаполис Дент&raquo;, г.&nbsp;Санкт-Петербург.</p>
        <p>Проводит хирургическую реабилитацию с&nbsp;использованием дентальных имплантатов и&nbsp;аугментации костной ткани пациентам с&nbsp;заболеваниями пародонта.</p>
        <p>Преподаватель курса пародонтологии кафедры стоматологии общей практики СПбИНСТОМ. Является автором курсов по&nbsp;терапевтической и&nbsp;хирургической пародонтологии с&nbsp;2005&nbsp;г.</p>
      `} />

      {speakers[0].edu.length > 0 && <div className="container">
        <Edu edu={speakers[0].edu} />
      </div>}

      <Examples examples={examples} />
    </>
  );
};

export default SpeakerPage;
