import {StyleSheet, Text} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {TitleProps} from "./title.props";

const Title = ({children}: TitleProps): ReactElement | null => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 18,
    },
  });

  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
};

export default Title;
