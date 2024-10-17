import React, {ReactElement} from "react";
import {NavigationProps} from "./navigation.props";
import styles from "./navigation.module.css";
import NavigationList from "@/components/_page-navigation/navigation-list/navigation-list";
import NavigationItem from "@/components/_page-navigation/navigation-item/navigation-item";

const Navigation = ({}: NavigationProps): ReactElement | null => {
  return (
    <NavigationList className={styles.list}>
      <NavigationItem isActive href={`#about`}>О преподавателе</NavigationItem>
      <NavigationItem href={`#education`}>Образование</NavigationItem>
      <NavigationItem href={`#examples`}>Рабочие кейсы</NavigationItem>
      <NavigationItem href={`#courses`}>Курсы</NavigationItem>
      <NavigationItem href={`#photos`}>Фото</NavigationItem>
    </NavigationList>
  );
};

export default Navigation;
