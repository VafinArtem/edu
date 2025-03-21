import NavigationItem from "@/components/_page-navigation/navigation-item/navigation-item";
import NavigationList from "@/components/_page-navigation/navigation-list/navigation-list";
import React, {ReactElement} from "react";
import styles from "./navigation.module.css";
import {NavigationProps} from "./navigation.props";

const Navigation = ({links}: NavigationProps): ReactElement | null => {
  return (
    <NavigationList className={styles.list}>
      {links.map((link, index) => <NavigationItem isActive={index === 0} key={index}
        href={link.href}>{link.name}</NavigationItem>)}
    </NavigationList>
  );
};

export default Navigation;
