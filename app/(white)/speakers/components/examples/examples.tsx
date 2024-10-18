"use client";

import React, {ReactElement, useEffect, useState} from "react";
import {ExamplesProps} from "./examples.props";
import styles from "./examples.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import ExampleItem from "@/components/_speaker/example-card/example-card";
import Button from "@/components/_buttons/button/button";
import clsx from "clsx";
import useIsResolution from "@/hooks/useIsResolution";

const Examples = ({examples}: ExamplesProps): ReactElement | null => {
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
    })}>
      <SectionItem className={clsx(`container`, styles.inner)}>
        <Heading tag={`h2`}>Рабочие кейсы</Heading>
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
