import {StyleSheet, Text, View} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {SpeakerProps} from "./speaker.props";

const Speaker = ({speaker, positionColor}: SpeakerProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      gap: 3,
    },
    name: {
      fontSize: 7,
      color: "#fff",
    },
    position: {
      fontSize: 7,
      color: positionColor,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{speaker.name}</Text>
      <Text style={styles.position}>{speaker.position}</Text>
    </View>
  );
};

export default Speaker;
