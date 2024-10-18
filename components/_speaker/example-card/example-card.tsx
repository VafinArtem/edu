import React, {ReactElement} from "react";
import {ExampleCardProps} from "./example-card.props";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import styles from "./example-card.module.css";
import clsx from "clsx";
import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import Image from "next/image";

const ExampleCard = <C extends BaseButtonComponent = "button">({
  example,
  className,
  ...props
}: ExampleCardProps<C>): ReactElement | null => {
  const {image, name} = example;

  return (
    <article className={clsx(styles.item, className)}>
      <BaseButton<C> className={clsx(styles.inner)} {...(props as BaseButtonProps<C>)}>
        <Image src={image} alt={``} width={417} height={319} className={styles.image} quality={95} priority={true} />
        <Paragraph fontWeight={"medium"} fontSize={"none"} className={styles.name}>{name}</Paragraph>
      </BaseButton>
    </article>
  );
};

export default ExampleCard;
