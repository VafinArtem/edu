import ProgramItem from "@/components/_pdf/program-item/program-item";
import {ProgramType} from "@/helpers/contants";
import {StyleSheet, Text, View} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {ProgramProps} from "./program.props";

const Program = ({courseType, theory, practice}: ProgramProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      gap: 15,
    },
    title: {
      fontSize: 18,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Что будет на {courseType}</Text>
      {theory.length > 0 && theory.map((item) => (
        <ProgramItem key={item.id} program={{...item, type: ProgramType.THEORY}} />))}
      {practice.length > 0 && theory.map((item) => (
        <ProgramItem key={item.id} program={{...item, type: ProgramType.PRACTICE}} />))}
    </View>
  );
};

export default Program;
