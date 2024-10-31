import React, {ReactElement} from "react";
import {BecomeSpeakerProps} from "./become-speaker.props";
import styles from "./become-speaker.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";

const BecomeSpeaker = ({className}: BecomeSpeakerProps): ReactElement | null => {
  return (<section className={clsx(className, styles.wrapper)}>
    <div className={clsx(styles.container, `container`)}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Heading tag={`h2`} className={styles.title}>Стать спикером</Heading>
          <Paragraph fontSize={"small"}>Мы&nbsp;всегда готовы к&nbsp;сотрудничеству со&nbsp;специалистами в&nbsp;сфере
            медицины
            и&nbsp;косметологии.</Paragraph>
          <Paragraph fontSize={"small"}>Если вы&nbsp;хотите стать спикером в&nbsp;нашем учебном центре, оставьте свои
            контакты,
            чтобы мы&nbsp;могли связаться с&nbsp;вами.</Paragraph>
        </div>
        <form className={styles.form}>
          <Input labelName={`Ваше имя*`} className={styles.input} placeholder={`Ваше имя`} />
          <Input labelName={`Номер телефона`} className={styles.input} placeholder={`Номер телефона*`} />
          <div className={styles.footer}>
            <Button type={"submit"} className={styles.submit}>Отправить</Button>
            <Paragraph fontSize={"none"} fontWeight={"light"} className={styles.footNote}>Нажимая на&nbsp;кнопку,
              вы&nbsp;соглашаетесь
              на&nbsp;обработку <a href={``} target={"_blank"}>персональных данных</a></Paragraph>
          </div>
        </form>
      </div>
    </div>
  </section>);
};

export default BecomeSpeaker;
