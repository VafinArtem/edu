import ScheduleDay from "@/components/_pdf/schedule-day/schedule-day";
import Title from "@/components/_pdf/title/title";
import {StyleSheet, View} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {ScheduleProps} from "./schedule.props";

const Schedule = ({schedule, courseType, location}: ScheduleProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      gap: 15,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Title>Что будет на {courseType}</Title>
      {schedule.map((item) => (<ScheduleDay location={location} key={item.id} day={item} />))}
    </View>
  );
};

export default Schedule;
