import React, {ReactElement} from "react";
import {SearchProps} from "./search.props";
import styles from "./search.module.css";
import clsx from "clsx";
import IconSearch from "./search.svg";
import IconReset from "./reset.svg";
import Wrapper from "@/components/_filters/wrapper/wrapper";

const Search = ({className, labelName, ...props}: SearchProps): ReactElement | null => {
  return (
    <Wrapper className={clsx(styles.wrapper, className)} removeMobileStyles={false}>
      <label className={styles.label}>
        <input type="text" className={styles.input} {...props} />
        <span className={`visually-hidden`}>{labelName}</span>
      </label>
      <div className={styles.buttons}>
        <button className={styles.reset} type={"button"}><IconReset /></button>
        <button className={styles.search} type={"button"}><IconSearch /></button>
      </div>
    </Wrapper>
  );
};

export default Search;
