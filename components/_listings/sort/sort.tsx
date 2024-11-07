import React, {ReactElement, useEffect, useState} from "react";
import clsx from "clsx";
import {SortProps} from "./sort.props";
import styles from "./sort.module.css";
import IconArrow from "./arrow.svg";
import IconArrows from "./arrows.svg";
import useOpenModal from "@/hooks/useOpenModal";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const sortValues = [
  {
    id: 1,
    name: `Сначала ближайшие`,
    value: `DATE_ASC`,
  },
  {
    id: 2,
    name: `Сначала дальние`,
    value: `DATE_DESC`,
  },
  {
    id: 3,
    name: `Сначала дороже`,
    value: `PRICE_DESC`,
  },
  {
    id: 4,
    name: `Сначала дешевле`,
    value: `PRICE_ASC`,
  },
];

const Sort = ({defaultName, initialValue}: SortProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const [currentSort, setSort] = useState<string>(initialValue);

  const {ref, showModal, changeModalActivityStatus} = useOpenModal<HTMLDivElement>();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (currentSort) {
      params.set(`sort`, currentSort);
    } else {
      params.delete(`sort`);
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [currentSort]);

  return (
    <div className={styles.wrapper}>
      <button className={clsx(styles.button, {
        [styles.open]: showModal,
      })} onClick={() => changeModalActivityStatus(true)}>
        <IconArrows width={16} height={16} />
        <span
          className={styles.text}>{sortValues.find((el) => el.value === currentSort)?.name ?? defaultName}</span>
        <IconArrow width={16} height={17} className={styles.arrow} />
      </button>
      <div className={clsx(styles.modal, {
        [styles.show]: showModal,
      })} ref={ref}>
        <ul className={styles.list}>
          {sortValues.map((value) => (
            <li
              tabIndex={0}
              key={value.id}
              className={clsx(styles.item, {
                [styles.active]: currentSort === value.value,
              })}
              onClick={() => {
                setSort(value.value);
                changeModalActivityStatus(false);
              }}
            >{value.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
