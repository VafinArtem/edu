import React, {ReactElement} from "react";
import {RecordFormProps} from "./record-form.props";
import styles from "./record-form.module.css";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Timer from "@/components/_common/timer/timer";
import Price from "@/components/_common/price/price";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";

const RecordForm = ({}: RecordFormProps): ReactElement | null => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textContent}>
        <Heading tag={`h2`} fontSize={`mid`} className={styles.title}>Успейте записаться по&nbsp;минимальной
          стоимости</Heading>
        <Paragraph className={styles.text} fontWeight={`light`}>По&nbsp;мере приближения обучения, стоимость будет
          увеличиваться.</Paragraph>
        <div className={styles.footer}>
          <Price oldPrice={35000} price={32000} />
          <Timer timestampToEnd={1731118486} text={`До повышения стоимости`}
            withoutTextOptions={{laptop: true, tablet: true, mobile: true}} />
        </div>
      </div>
      <form action="#" className={styles.form}>
        <Input name={`name`} placeholder={`Ваше имя*`} labelName={`Ваше имя`} />
        <Input name={`contact`} placeholder={`Номер телефона или email*`} labelName={`Номер телефона или email`} />
        <div className={styles.formFooter}>
          <Button className={styles.submit}>
            Записаться <span className="only-mobile">на мастер-класс</span>
          </Button>
          <p className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь на&nbsp;обработку <a
            target={`_blank`} href={`#`}>персональных данных</a></p>
        </div>
      </form>
    </section>
  );
};

export default RecordForm;
