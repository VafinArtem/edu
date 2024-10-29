import React, {ReactElement} from "react";
import {SearchProps} from "./search.props";
import styles from "./search.module.css";
import clsx from "clsx";
import IconSearch from "./search.svg";
import IconReset from "./reset.svg";
import Wrapper from "@/components/_filters/wrapper/wrapper";

const Search = ({className, ...props}: SearchProps): ReactElement | null => {
  return (
    <Wrapper className={clsx(styles.wrapper, className)} removeMobileStyles={false}>
      <label className={styles.label}>
        <input type="text" name={`search`} className={styles.input} {...props}
          placeholder={`Курс или направление...`} />
        <span className={`visually-hidden`}>Поиск по курсам или направлениям</span>
      </label>
      <div className={styles.buttons}>
        <button className={styles.reset} type={"button"}><IconReset /></button>
        <button className={styles.search} type={"button"}><IconSearch /></button>
      </div>
    </Wrapper>
  );
};

export default Search;
