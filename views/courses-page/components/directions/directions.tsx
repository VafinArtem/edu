import React, {ReactElement} from "react";
import {DirectionsProps} from "./directions.props";
import styles from "./directions.module.css";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Directions = ({directions, children, ...props}: DirectionsProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper} {...props}>
      {children}
      <form className={styles.inner}>
        {directions.length > 0 && directions.map((direction) => <Link
          href={pathname.includes(`/courses/category-${direction.alias}`) ? `/courses` : `/courses/category-${direction.alias}`}
          key={direction.id}
          className={clsx(styles.item, {
            [styles.active]: pathname.includes(`category-${direction.alias}`),
            [styles.notActive]: pathname.includes(`category-`) && !pathname.includes(`category-${direction.alias}`),
          })}>
          <span className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}
            style={{color: direction.color}} />
          {direction.name}
        </Link>)}
      </form>
    </div>
  );
};

export default Directions;
