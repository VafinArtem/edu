import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
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
      <SectionCenterHead>
        <Heading tag={"h2"}>Акции и скидки</Heading>
      </SectionCenterHead>

      <div className={styles.list}>
        <div className={styles.item}>
          <Heading tag={"h3"} fontSize={"none"} className={styles.title}>Система скидок</Heading>
          <ul className={styles.bulletList}>
            <li>Чем ближе мероприятие, тем скидка меньше, соответственно, цена вырастает.</li>
            <li>Акции не суммируются, при наличии у одного человека нескольких оснований для скидки применяется
              наибольшая из них.
            </li>
            <li>Скидки применяются к цене, действующей на момент оплаты.</li>
            <li>Все скидки применяются к стоимости лекций, указанных на момент записи.</li>
          </ul>
        </div>
        <Item title={"Скидки для групп"} icon={<IconUsers />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>При условии посещения только лекции (без практики) 2-х человек предоставляется
              скидка в размере
              20%, от 3-х человек — 30 %. Заявка на мероприятие подаётся с указанием имён всех участников из этой
              группы.</Paragraph>
            <Paragraph fontSize={"small"}>При отказе от участия одного или нескольких членов такой группы скидки
              пересчитываются, и
              оставшимся участникам необходимо произвести доплату.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки для студентов и ординаторов"} icon={<IconCap />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>Для студентов и ординаторов действует 30% скидка на лекции (при условии
              посещения только лекции
              без практики). Чтобы получить скидку, необходимо предоставить документ, подтверждающий обучение в учебном
              заведении.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки для ассистентов"} icon={<IconAssistant />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>Скидка в размере 50% предоставляется ассистенту при посещении семинаров вместе
              с
              доктором.</Paragraph>
          </div>
        </Item>
        <Item title={"Скидки за email подписку"} icon={<IconMail />}>
          <div className={styles.content}>
            <Paragraph fontSize={"small"}>За подписку на email рассылку предоставляется разовая скидка в размере 20%,
              которая
              распространяется только на лекции.</Paragraph>
          </div>
        </Item>
      </div>
    </SectionItem>
  );
};

export default Promotions;
