import React, {ReactElement} from "react";
import {OtherProjectsProps} from "./other-projects.props";
import styles from "./other-projects.module.css";
import Heading from "@/components/_tags/heading/heading";

const OtherProjects = ({className, children}: OtherProjectsProps): ReactElement | null => {
  return (
    <section className={className}>
      <Heading tag={`h2`} className={`visually-hidden`}>Наши другие проекты</Heading>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
};

export default OtherProjects;
