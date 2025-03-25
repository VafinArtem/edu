import {SlugPart} from "@/helpers/contants";
import {Route} from "@/helpers/route";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./audience.module.css";
import {AudienceProps} from "./audience.props";

const Audience = ({audience}: AudienceProps): ReactElement | null => {
  return (
    <Link href={`/${Route.COURSES}/${SlugPart.AUDIENCE}-${audience.alias}`}
      className={styles.wrapper} style={{backgroundColor: audience.category.background}}>
      {audience.name}
    </Link>
  );
};

export default Audience;
