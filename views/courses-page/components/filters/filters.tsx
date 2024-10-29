import React, {ReactElement} from "react";
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

const Filters = ({className}: FiltersProps): ReactElement | null => {
  return (
    <form className={clsx(className, styles.form)}>
      <Heading tag={`h2`} className={`visually-hidden`}>Фильтрация</Heading>
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
        <Checkbox className={styles.advancedTraining} labelName={`Повышение квалификации`} name={`advanced-training`} />
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
        <CollapseItem name={`Дата`} contentClassName={styles.date} initialIsShow={true}>
          <Dates />
        </CollapseItem>
      </Wrapper>
    </form>
  );
};

export default Filters;
