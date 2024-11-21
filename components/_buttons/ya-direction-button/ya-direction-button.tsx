import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./ya-direction-button.module.css";
import {YaDirectionButtonProps} from "./ya-direction-button.props";

const YaDirectionButton = ({position, backgroundColor, className}: YaDirectionButtonProps): ReactElement | null => {
  return (
    <a href={`https://yandex.ru/maps/?rtext=~${position[0]}%2C${position[1]}`} target="_blank"
      rel="noopener noreferrer" className={clsx(styles.direction, className, {
      [styles.white]: backgroundColor === "white",
      [styles.primary]: backgroundColor === "primary",
    })}>Проложить маршрут</a>
  );
};

export default YaDirectionButton;
