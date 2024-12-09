import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {courses} from "@/mocs/courses";
import {content} from "@/mocs/one-news";
import ContentWrapper from "@/views/one-news-page/components/content-wrapper/content-wrapper";
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
          course={courses[0]}
        />
        <ContentWrapper content={content} />
      </div>

    </React.Fragment>
  );
};

export default OneNewsPage;
