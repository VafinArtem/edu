import React, {ReactElement} from "react";
import {SocialProps} from "./social.props";
import styles from "./social.module.css";
import Heading from "@/components/_tags/heading/heading";

const Social = ({children, className}: SocialProps): ReactElement | null => {
  return (
    <section className={className}>
      <Heading tag={`h2`} className={`visually-hidden`}>Наши социальные сети</Heading>
      <ul className={styles.list}>
        {children}
      </ul>
    </section>
  );
};

export default Social;
