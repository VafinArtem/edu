import React, {ReactElement} from "react";
import {DirectionsProps} from "./directions.props";
import styles from "./directions.module.css";
import clsx from "clsx";

const Directions = ({directions, children, ...props}: DirectionsProps): ReactElement | null => {
  return (
    <div className={styles.wrapper} {...props}>
      {children}
      <form className={styles.inner}>
        {directions.map((direction, index) => <button key={direction.id} type={`button`} className={clsx(styles.item, {
          [styles.active]: index === 0,
          [styles.notActive]: index === 1,
        })}>
          <span className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}
            style={{color: direction.color}} />
          {direction.name}
        </button>)}
      </form>
    </div>
  );
};

export default Directions;
