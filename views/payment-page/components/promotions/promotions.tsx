import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Item from "@/views/payment-page/components/item/item";
import React, {ReactElement} from "react";
import IconAssistant from "./assistant.svg";
import IconCap from "./cap.svg";
import IconMail from "./mail.svg";
import styles from "./promotions.module.css";
import {PromotionsProps} from "./promotions.props";
import IconUsers from "./users.svg";

const Promotions = ({}: PromotionsProps): ReactElement | null => {

  return (
    <SectionItem className={"container"} id={`promotions`}>
      <Heading tag={"h2"} className={styles.mainTitle}>Акции и скидки</Heading>

      <div className={styles.list}>
        <div className={styles.item}>
          <Heading tag={"h3"} fontSize={"none"} className={styles.title}>Система скидок</Heading>
          <ul className={styles.bulletList}>
            <li>Чем ближе мероприятие, тем скидка меньше, соответственно, цена вырастает.</li>
            <li>Акции не&nbsp;суммируются, при наличии у&nbsp;одного человека нескольких оснований для скидки
              применяется
              наибольшая из&nbsp;них.
            </li>
            <li>Скидки применяются к&nbsp;цене, действующей на&nbsp;момент оплаты.</li>
            <li>Все скидки применяются к&nbsp;стоимости лекций, указанных на&nbsp;момент записи.</li>
          </ul>
        </div>
        <Item title={"Скидки для групп"} icon={<IconUsers />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>При условии посещения только лекции (без практики) 2-х человек предоставляется
              скидка в&nbsp;размере
              20%, от&nbsp;3-х человек&nbsp;&mdash; 30&nbsp;%. Заявка на&nbsp;мероприятие подаётся с&nbsp;указанием имён
              всех участников из&nbsp;этой
              группы.</Paragraph>
            <Paragraph fontSize={"small"}>При отказе от&nbsp;участия одного или нескольких членов такой группы скидки
              пересчитываются, и
              оставшимся участникам необходимо произвести доплату.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки для студентов и&nbsp;ординаторов"} icon={<IconCap />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>Для студентов и&nbsp;ординаторов действует&nbsp;30% скидка на&nbsp;лекции (при
              условии
              посещения только лекции
              без практики). Чтобы получить скидку, необходимо предоставить документ, подтверждающий обучение
              в&nbsp;учебном
              заведении.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки для ассистентов"} icon={<IconAssistant />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>Скидка в&nbsp;размере&nbsp;50% предоставляется ассистенту при посещении
              семинаров вместе
              с&nbsp;доктором.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки за&nbsp;email подписку"} icon={<IconMail />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>За&nbsp;подписку на&nbsp;email рассылку предоставляется разовая скидка
              в&nbsp;размере&nbsp;20%,
              которая
              распространяется только на&nbsp;лекции.</Paragraph>
          </div>
        </Item>
      </div>
    </SectionItem>
  );
};

export default Promotions;
