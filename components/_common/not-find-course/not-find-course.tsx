import React, {ReactElement} from "react";
import {NotFindCourseProps} from "./not-find-course.props";
import styles from "./not-find-course.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Input} from "@/components/_form/input/input";
import Button from "@/components/_buttons/button/button";
import {Textarea} from "@/components/_form/textarea/textarea";

const NotFindCourse = ({className}: NotFindCourseProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={clsx(styles.container, `container`)}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <Heading tag={`h2`} className={styles.title}>Не нашли нужный курс?</Heading>
            <Paragraph fontSize={"small"}>Расскажите, какие&nbsp;бы курсы вы&nbsp;хотели видеть на&nbsp;нашей платформе.
              Мы&nbsp;учитываем
              все запросы при формировании новых учебных программ.</Paragraph>
            <Paragraph fontSize={"small"}>Возможно уже в&nbsp;следующем месяце вы&nbsp;найдёте тот курс, о&nbsp;котором
              нам
              писали.</Paragraph>
          </div>
          <form className={styles.form}>
            <Textarea labelName={`Ваш комментарий`} placeholder={`Ваш комментарий`} className={styles.textarea} />
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
    </section>
  );
};

export default NotFindCourse;
