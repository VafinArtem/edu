import ProgramItem from "@/components/_pdf/program-item/program-item";
import Title from "@/components/_pdf/title/title";
import {ProgramType} from "@/helpers/contants";
import {StyleSheet, View} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {ProgramProps} from "./program.props";

const Program = ({courseType, theory, practice}: ProgramProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexShrink: 0,
      flexDirection: "column",
      gap: 15,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Title>Что будет на {courseType}</Title>
      {theory.length > 0 && theory.map((item) => (
        <ProgramItem key={item.id} program={{...item, type: ProgramType.THEORY}} />))}
      {practice.length > 0 && theory.map((item) => (
        <ProgramItem key={item.id} program={{...item, type: ProgramType.PRACTICE}} />))}
    </View>
  );
};

export default Program;
