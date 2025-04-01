import Heading from "@/components/_tags/heading/heading";
import React, {ReactElement} from "react";
import styles from "./item.module.css";
import {ItemProps} from "./item.props";

const Item = ({title, icon, children}: ItemProps): ReactElement | null => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.icon}>
          {icon}
        </div>
        <Heading tag={"h3"} fontSize={"none"} className={styles.title}
          dangerouslySetInnerHTML={{__html: title}} />
      </div>
      {children}
    </article>
  );
};

export default Item;
