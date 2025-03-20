import GalleryContainer from "@/components/_gallery/gallery-container/gallery-container";
import GallerySlider from "@/components/_gallery/gallery-slider/gallery-slider";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import React, {ReactElement} from "react";
import styles from "./equipment.module.css";
import {EquipmentProps} from "./equipment.props";

const photos = [
  `/img/about-page/equipment/image-1.jpg`,
  `/img/about-page/equipment/image-2.jpg`,
  `/img/about-page/equipment/image-3.jpg`,
  `/img/about-page/equipment/image-4.jpg`,
  `/img/about-page/equipment/image-1.jpg`,
  `/img/about-page/equipment/image-2.jpg`,
  `/img/about-page/equipment/image-3.jpg`,
  `/img/about-page/equipment/image-4.jpg`,
];

const Equipment = ({}: EquipmentProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <div className={"container"}>
        <div className={styles.content}>
          <Heading tag={"h2"}>Учебный центр AMRITA оснащён всем необходимым оборудованием</Heading>
          <Paragraph>Для проведения обучающих мероприятий в&nbsp;учебном центре созданы комфортные условия. Занятия
            проходят в&nbsp;удобных помещениях, оснащенных современным оборудованием. Есть зона отдыха, где можно
            отдохнуть и&nbsp;перекусить.</Paragraph>
        </div>
      </div>
      <GalleryContainer>
        <GallerySlider photos={photos} />
      </GalleryContainer>
    </div>
  );
};

export default Equipment;
