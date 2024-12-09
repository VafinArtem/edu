import {content} from "@/mocs/one-news";
import Content from "@/views/one-news-page/components/content/content";
import {ElementType} from "domelementtype";
import {Element, NodeWithChildren} from "domhandler";
// @ts-expect-error 123
import {ChildNode, DataNode} from "domhandler/lib/node";
import * as htmlparser2 from "htmlparser2";
import {nanoid} from "nanoid";
import Image from "next/image";
import React, {createElement, ReactElement} from "react";
import styles from "./content-wrapper.module.css";
import {ContentWrapperProps} from "./content-wrapper.props";

const createElements = (el: NodeWithChildren | ChildNode, key: string) => {
  if (!el) return null;

  return el.type === ElementType.Tag ? createElement((el as Element).name, {
    key,
    className: el.attribs.class ? styles[el.attribs.class] : undefined,
  }, ...el.children.map((elChild: ChildNode) => {
    return createElements(elChild, nanoid(20));
  })) : convertData((el as DataNode).data, key);
};

const contentParse = (content: string) => {
  const dom = htmlparser2.parseDocument(content);

  return Array.from(dom.children).map((child: ChildNode) => {
    return createElements(child, nanoid(20));
  });
};

const convertData = (data: string, key: string) => {
  if (!data.includes("{{") && !data.includes("}}")) return (<>
      {data}
    </>
  );

  let convertedData = data.replaceAll(`{{`, ``).replaceAll(`}}`, ``);

  if (convertedData.includes(`course`)) {
    return (<span key={key}>course card</span>);
  }

  convertedData = JSON.parse(convertedData);

  if (Array.isArray(convertedData)) {
    return ImagesSlider({images: convertedData as string[], key});
  }
};

const ImagesSlider = ({images, key}: {images: string[], key: string}): ReactElement | null => {
  return (
    <div key={key}>
      {images.map((el) => <Image src={el} alt={``} key={nanoid(20)} width={100} height={100} />)}
    </div>
  );
};

const ContentWrapper = ({}: ContentWrapperProps): ReactElement | null => {
  return (
    <Content>
      {contentParse(content)}
    </Content>
  );
};

export default ContentWrapper;
