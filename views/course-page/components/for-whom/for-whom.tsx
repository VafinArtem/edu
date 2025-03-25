import SectionItem from "@/components/_section/section-item/section-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";
import Audience from "@/views/course-page/components/for-whom/components/audience/audience";
import Content from "@/views/course-page/components/for-whom/components/content/content";
import React, {ReactElement} from "react";

import styles from "./for-whom.module.css";
import {ForWhomProps} from "./for-whom.props";

const ForWhom = ({className, audience, content}: ForWhomProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <SectionTextHead title={`Для кого?`}
        text={content ? "" : "Мастер-класс будет наиболее интересен специалистам этих направлений:"}>
      </SectionTextHead>
      <div className={styles.inner}>
        {audience.length > 0 && (<div className={styles.audience}>
          {audience.map((item) => (<Audience key={item.id} audience={item} />))}
        </div>)}
        {content && <Content content={content} />}
      </div>
    </SectionItem>
  );
};

export default ForWhom;
