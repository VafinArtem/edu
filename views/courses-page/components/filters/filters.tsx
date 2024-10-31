import React, {ForwardedRef, forwardRef, ReactElement, useEffect, useRef, useState} from "react";
import {FiltersProps} from "./filters.props";
import styles from "./filters.module.css";
import clsx from "clsx";
import Select from "@/components/_filters/select/select";
import Search from "@/components/_filters/search/search";
import Wrapper from "@/components/_filters/wrapper/wrapper";
import Checkbox from "@/components/_filters/checkbox/checkbox";
import Heading from "@/components/_tags/heading/heading";
import CollapseItem from "@/components/_filters/collapse-item/collapse-item";
import PriceItem from "@/components/_filters/price-item/price-item";
import Dates from "@/components/_filters/dates/dates";
import CloseButton from "@/components/_buttons/close-button/close-button";
import Button from "@/components/_buttons/button/button";
import useIsResolution from "@/hooks/useIsResolution";

const Filters = forwardRef(({
  className,
  showMobileFilters,
  setShowMobileFilters,
}: FiltersProps, ref: ForwardedRef<HTMLFormElement>): ReactElement | null => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);
  const isMobile = useIsResolution(1099);

  useEffect(() => {
    const onWrapperTransitionend = () => {
      innerRef.current.style.transform = `translateY(0)`;
    };

    const onInnerTransitionend = () => {
      setShowModal(false);
      wrapperRef.current.style.opacity = `0`;
    };

    if (!isMobile) return;

    if (showMobileFilters) {
      setShowModal(true);

      document.body.style.overflow = "hidden";
      wrapperRef.current.addEventListener(`transitionend`, onWrapperTransitionend, {once: true});

      setTimeout(() => {
        wrapperRef.current.style.opacity = `1`;
      }, 0);
    } else {
      document.body.style.overflow = "initial";
      innerRef.current.addEventListener(`transitionend`, onInnerTransitionend, {once: true});

      setTimeout(() => {
        innerRef.current.style.transform = `translateY(100%)`;
      }, 0);
    }

    return () => {
      wrapperRef.current.removeEventListener(`transitionend`, onWrapperTransitionend);
      innerRef.current.removeEventListener(`transitionend`, onInnerTransitionend);
    };
  }, [showMobileFilters]);

  return (
    <div className={clsx(className, styles.wrapper, {
      [styles.show]: showModal,
    })}
      ref={wrapperRef}
    >
      <div className={styles.hiddenWrapper} ref={innerRef}>
        <form className={styles.form} ref={ref}>
          <CloseButton className={styles.close} onClick={() => {
            setShowMobileFilters(false);
          }} />

          <Heading tag={`h2`} className={styles.title}>Фильтры</Heading>

          <div className={styles.inner}>
            <Select
              className={styles.typeSelect}
              labelName={"Тип обучения"}
              name={`courseType`}
              options={[{
                name: "Семинар",
                value: 1,
                color: "#E567BA",
              }, {
                name: "Мастер-класс",
                value: 2,
                color: "#E57027",
              }, {
                name: "Конференция",
                value: 3,
                color: "#559D2D",
              }, {
                name: "Вебинар",
                value: 4,
                color: "#A47CEB",
              }, {
                name: "Курс",
                value: 5,
                color: "#2FA4D7",
              }]}
            />

            <Search className={styles.search} />

            <Wrapper className={styles.common}>
              <Checkbox className={styles.advancedTraining} labelName={`Повышение квалификации`}
                name={`advanced-training`} />

              <CollapseItem name={`Город`} contentClassName={styles.checkboxList}>
                <Checkbox labelName={`Санкт-Петербург`} name={`city`} />
                <Checkbox labelName={`Москва`} name={`city`} />
              </CollapseItem>
              <CollapseItem name={`Преподаватель`} contentClassName={styles.checkboxList}>
                <Checkbox labelName={`Санкт-Петербург`} name={`city`} />
                <Checkbox labelName={`Москва`} name={`city`} />
              </CollapseItem>
              <CollapseItem name={`Продолжительность`} contentClassName={styles.checkboxList}>
                <Checkbox labelName={`Санкт-Петербург`} name={`city`} />
                <Checkbox labelName={`Москва`} name={`city`} />
              </CollapseItem>
              <CollapseItem name={`Цена`} contentClassName={styles.priceList}>
                <PriceItem labelName={`от`} placeholder={`1 000`} />
                <PriceItem labelName={`до`} placeholder={`80 000`} />
              </CollapseItem>
              <CollapseItem name={`Дата`} contentClassName={styles.date}>
                <Dates />
              </CollapseItem>
            </Wrapper>

            <div className={styles.buttons}>
              <Button type={`reset`} color={"primary-light"}>Очистить</Button>
              <Button type={`submit`}>Применить</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});

Filters.displayName = `Filters`;

export default Filters;
