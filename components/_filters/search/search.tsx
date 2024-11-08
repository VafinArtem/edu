import React, {ReactElement, useRef} from "react";
import {SearchProps} from "./search.props";
import styles from "./search.module.css";
import clsx from "clsx";
import IconSearch from "./search.svg";
import IconReset from "./reset.svg";
import Wrapper from "@/components/_filters/wrapper/wrapper";

const Search = ({className, labelName, resetCB, ...props}: SearchProps): ReactElement | null => {
  const ref = useRef(null!);

  return (
    <Wrapper className={clsx(styles.wrapper, className)} removeMobileStyles={false}>
      <label className={styles.label}>
        <input type="text" className={styles.input} {...props} ref={ref} />
        <span className={`visually-hidden`}>{labelName}</span>
      </label>
      <div className={styles.buttons}>
        {(ref.current && (ref.current as HTMLInputElement).value) &&
          <button className={styles.reset} type={"button"} onClick={() => {
            (ref.current as HTMLInputElement).value = ``;
            resetCB();
          }}><IconReset /></button>}
        <button className={styles.search} type={"button"}><IconSearch /></button>
      </div>
    </Wrapper>
  );
};

export default Search;
