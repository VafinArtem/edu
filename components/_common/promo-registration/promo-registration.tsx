import React, {ReactElement} from "react";
import {PromoRegistrationProps} from "./promo-registration.props";
import styles from "./promo-registration.module.css";
import clsx from "clsx";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";

const PromoRegistration = ({className}: PromoRegistrationProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      <h2 className="visually-hidden">Специальное предложение</h2>
      <div className={styles.content}>
        <Paragraph fontSize={"none"} className={styles.text}>Присоединяйтесь к&nbsp;обучающей платформе
          Amrita и&nbsp;получите
          1000&nbsp;₽ на&nbsp;бонусный
          счёт</Paragraph>
        <form action="#" className={styles.form}>
          <Input labelName={`Телефон`} className={styles.input} placeholder={`Телефон`} />
          <Button type={"submit"} className={styles.submit}>Зарегистрироваться</Button>
          <Paragraph fontSize={"none"} className={styles.footNote}>Нажимая на&nbsp;кнопку, вы&nbsp;соглашаетесь
            на&nbsp;обработку <a href={``} target={"_blank"}>персональных данных</a></Paragraph>
        </form>
      </div>
    </section>
  );
};

export default PromoRegistration;
