import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import HowItWas from "@/views/one-news-page/components/how-it-was/how-it-was";
import Top from "@/views/one-news-page/components/top/top";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./one-news-page.module.css";
import {OneNewsPageProps} from "./one-news-page.props";

const OneNewsPage = ({}: OneNewsPageProps): ReactElement | null => {
  return (
    <React.Fragment>
      <Pagination className={`container`} pagination={[{name: `Новости`, link: Route.NEWS}, {
        name: `Практический курс по эндодонтическому лечению`,
      }]} />
      <div style={{overflow: `hidden`}}>
        <div className={clsx(styles.page, `container`)}>
          <Top
            title={`Практический курс по эндодонтическому лечению`}
            date={1733462840}
            type={`Курсы, лекции, семинары`}
            description={`19-20 февраля 2023 года в нашем учебном центре «Амрита» прошел авторский практический курс Филипповой Татьяны Владимировны, который был посвящен базовому эндодонтическому лечению.`}
            promoImage={`/img/one-news-page/promo.png`}
            titles={[
              `Как это было`,
              `О курсе`,
              `Ближайшие потоки курса по эндодонтическому лечению`,
              `Преподаватель курса`,
            ]}
          />
          <HowItWas />
        </div>
      </div>

    </React.Fragment>
  );
};

export default OneNewsPage;
