import React, {ReactElement, useEffect, useState} from "react";
import {DirectionsProps} from "./directions.props";
import styles from "./directions.module.css";
import clsx from "clsx";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Directions = ({directions, initialDirections, children, ...props}: DirectionsProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const [currentDirections, setCurrentDirections] = useState<string>(initialDirections);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (currentDirections) {
      params.set(`directions`, currentDirections);
    } else {
      params.delete(`directions`);
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [currentDirections]);

  return (
    <div className={styles.wrapper} {...props}>
      {children}
      <form className={styles.inner}>
        {directions.length > 0 && directions.map((direction) => <button key={direction.id} type={`button`}
          className={clsx(styles.item, {
            [styles.active]: currentDirections.includes(`${direction.id}`),
            [styles.notActive]: currentDirections && !currentDirections.includes(`${direction.id}`),
          })} onClick={() => {
          const params = new URLSearchParams(searchParams);

          if (!currentDirections.includes(`${direction.id}`)) {
            if (!currentDirections) {
              setCurrentDirections(`${direction.id}`);
              // params.set(`directions`, `${direction.id}`);
            } else {
              setCurrentDirections(`${currentDirections},${direction.id}`);
              // params.set(`directions`, `${currentValue},${term}`);
            }
          }

          if (currentDirections.includes(`${direction.id}`)) {
            if (currentDirections === `${direction.id}`) {
              setCurrentDirections(``);
            } else {
              const values = currentDirections!.split(`,`);

              const index = values.indexOf(`${direction.id}`);

              if (index !== -1) {
                values.splice(index, 1);

                setCurrentDirections(values.toString());
                // params.set(`directions`, values.toString());
              }
            }
          }

          params.set(`directions`, currentDirections);

          replace(`${pathname}?${params.toString()}`, {
            scroll: false,
          });
        }}>
          <span className={styles.icon} dangerouslySetInnerHTML={{__html: direction.icon}}
            style={{color: direction.color}} />
          {direction.name}
        </button>)}
      </form>
    </div>
  );
};

export default Directions;
