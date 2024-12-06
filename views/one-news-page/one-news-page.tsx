import Pagination from "@/components/_common/pagination/pagination";
import {Route} from "@/helpers/route";
import {courses} from "@/mocs/courses";
import {content} from "@/mocs/one-news";
import Top from "@/views/one-news-page/components/top/top";
import clsx from "clsx";
import {ElementType} from "domelementtype";
import {Element, NodeWithChildren} from "domhandler";
// @ts-expect-error 123
import {ChildNode, DataNode} from "domhandler/lib/node";
import * as htmlparser2 from "htmlparser2";
import Image from "next/image";
import React, {createElement, ReactElement} from "react";
import styles from "./one-news-page.module.css";
import {OneNewsPageProps} from "./one-news-page.props";

const createElements = (el: NodeWithChildren | ChildNode) => {
  if (!el) return null;

  return el.type === ElementType.Tag ? createElement((el as Element).name, undefined, el.children.map((elChild: ChildNode) => {
    return createElements(elChild);
  })) : convertData((el as DataNode).data);
};

const contentParse = (content: string) => {
  const dom = htmlparser2.parseDocument(content);

  return Array.from(dom.children).map((child: ChildNode) => {
    return createElements(child);
  });
};

const convertData = (data: string) => {
  if (!data.includes("{{") && !data.includes("}}")) return data;

  let convertedData = data.replaceAll(`{{`, ``).replaceAll(`}}`, ``);

  if (convertedData.includes(`course`)) {
    return `course card`;
  }

  convertedData = JSON.parse(convertedData);

  if (Array.isArray(convertedData)) {
    return ImagesSlider({images: convertedData as string[]});
  }
};

const ImagesSlider = ({images}: {images: string[]}): ReactElement | null => {
  return (
    <>
      {images.map((el) => <Image src={el} alt={``} key={el} width={100} height={100} />)}
    </>
  );
};

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
        <div>
          {contentParse(content)}
        </div>
      </div>

    </React.Fragment>
  );
};

export default OneNewsPage;
