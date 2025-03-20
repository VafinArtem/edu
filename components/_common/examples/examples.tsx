"use client";

import Button from "@/components/_buttons/button/button";
import SectionItem from "@/components/_section/section-item/section-item";
import ExampleItem from "@/components/_speaker/example-card/example-card";
import Heading from "@/components/_tags/heading/heading";
import useIsResolution from "@/hooks/useIsResolution";
import clsx from "clsx";
import React, {ReactElement, useEffect, useState} from "react";
import styles from "./examples.module.css";
import {ExamplesProps} from "./examples.props";

const Examples = ({
  examples,
  className,
  headingOptions,
  withoutWrapperPaddings,
  ...props
}: ExamplesProps): ReactElement | null => {
  const isLaptop = useIsResolution({min: 1024, max: 1499});
  const isTablet = useIsResolution({min: 680, max: 1023});
  const isMobile = useIsResolution({min: 0, max: 679});

  const getCondition = () => {
    if (isLaptop) {
      return examples.length > 3;
    }

    if (isTablet || isMobile) {
      return examples.length > 2;
    }

    return examples.length > 4;
  };

  const [showAll, setShowAll] = useState<boolean>(true);

  useEffect(() => {
    setShowAll(!getCondition());
  }, [isLaptop, isMobile, isTablet]);

  return (
    <div className={clsx(styles.wrapper, {
      [styles.show]: showAll,
      [styles.withoutWrapperPaddings]: withoutWrapperPaddings,
    })} {...props}>
      <SectionItem className={clsx(className, styles.inner)}>
        <Heading tag={headingOptions.tag} fontSize={headingOptions.fontSize}>Рабочие кейсы</Heading>
        <div className={styles.list}>
          {examples.map((example) => <ExampleItem key={example.id} example={example} className={styles.item} />)}
        </div>
        {getCondition() && <div className={styles.bottom}>
          <Button className={styles.button} onClick={() => setShowAll(!showAll)}>Показать больше</Button>
        </div>}
      </SectionItem>
    </div>
  );
};

export default Examples;
