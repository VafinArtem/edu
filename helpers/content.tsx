import styles from "@/views/course-page/components/for-whom/components/content/content.module.css";
import {ElementType} from "domelementtype";
import {Element, NodeWithChildren} from "domhandler";
// @ts-expect-error 123
import {ChildNode, DataNode} from "domhandler/lib/node";
import * as htmlparser2 from "htmlparser2";
import {nanoid} from "nanoid";
import React, {createElement, ReactNode} from "react";

type ConvertDataCbType = (data: string, key: string) => ReactNode;

const convertData = (data: string, key: string): ReactNode => {
  return (<React.Fragment key={key}>
    {data}
  </React.Fragment>);
};

const createElements = (el: NodeWithChildren | ChildNode, key: string, convertDataCb?: ConvertDataCbType) => {
  convertDataCb = !convertDataCb ? convertData : convertDataCb;

  if (!el) return null;

  return el.type === ElementType.Tag ? createElement((el as Element).name, {
    key,
    controls: el.attribs.controls ? true : undefined,
    src: el.attribs.src ? el.attribs.src : undefined,
    type: el.attribs.type ? el.attribs.type : undefined,
    className: el.attribs.class ? styles[el.attribs.class] : undefined,
  }, ...el.children.map((elChild: ChildNode) => {
    return createElements(elChild, nanoid(20), convertDataCb);
  })) : convertDataCb((el as DataNode).data, key);
};

/**
 * @param convertDataCb - Колбэк для подмены текста формата {{ example-text }} на React компонент
 */
export const contentParse = (content: string, convertDataCb?: ConvertDataCbType) => {
  const dom = htmlparser2.parseDocument(content.replace(/>\s+?</g, "><"));

  return Array.from(dom.children).map((child: ChildNode) => {
    return createElements(child, nanoid(20), convertDataCb);
  });
};
