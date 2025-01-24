import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {ElementType} from "domelementtype";
import {Element, NodeWithChildren} from "domhandler";
import {ChildNode, DataNode} from "domhandler/lib/node";
import * as htmlparser2 from "htmlparser2";
import {nanoid} from "nanoid";
import React, {createElement, ReactElement} from "react";
import styles from "./for-whom.module.css";
import {ForWhomProps} from "./for-whom.props";

const ForWhom = ({className}: ForWhomProps): ReactElement | null => {
  const style = styles;

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
      // return <ImagesSlider images={convertedData as string[]} key={key} />;
    }
  };

  return (
    <SectionItem className={className}>
      <SectionHead>
        <Heading tag={`h2`}>Для кого?</Heading>
      </SectionHead>
    </SectionItem>
  );
};

export default ForWhom;
