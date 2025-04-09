import {StyleSheet, Text, View} from "@react-pdf/renderer";
import {Style} from "@react-pdf/types";
import React, {ReactElement} from "react";
import {ScheduleDayProps} from "./schedule-day.props";

const ScheduleDay = ({day, location}: ScheduleDayProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 10,
      borderRadius: 25,
      padding: 25,
      backgroundColor: "#fff",
    },
    content: {
      flexDirection: "column",
      gap: 5,
    },
    name: {
      fontSize: 9,
      fontWeight: 500,
    },
    text: {
      fontSize: 8,
    },
    item: {
      width: 230,
    },
    location: {
      flexDirection: "column",
      gap: 5,
    },
    gray: {
      color: "#667085",
    },
    list: {
      flexDirection: "column",
      gap: 5,
      fontSize: 8,
    },
    blueList: {
      borderLeft: "1pt solid #F0F9FF",
      color: "#254885",
    },
    redList: {
      borderLeft: "1pt solid #F9F1F3",
      color: "#A13652",
    },
    listItem: {
      flexDirection: "row",
      gap: 3,
      padding: "3px 5px",
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    blueItem: {
      backgroundColor: "#F0F9FF",
    },
    redItem: {
      backgroundColor: "#F9F1F3",
    },
    time: {
      marginLeft: "auto",
      color: "#101828",
    },
  });

  const listStyle: Style[] = [styles.item, styles.list];
  const itemStyle: Style[] = [styles.listItem];

  if (day.color === "red") {
    listStyle.push(styles.redList);
    itemStyle.push(styles.redItem);
  }

  if (day.color === "blue") {
    listStyle.push(styles.blueList);
    itemStyle.push(styles.blueItem);
  }

  return (
    <View style={styles.wrapper} wrap={false}>
      <View style={[styles.item, styles.content]}>
        <Text style={styles.name}>{day.name}</Text>
        <Text style={styles.text}>{day.times.start}{day.times.end ? ` — ${day.times.end}` : ``}</Text>
        {(location.city || location.address || location.metro) && <View style={styles.location}>
          <Text style={[styles.text, styles.gray]}>Место проведения:</Text>
          {location.city && <Text style={styles.text}>{location.city}</Text>}
          {location.address && <Text style={styles.text}>{location.address}</Text>}
          {location.metro && <Text style={styles.text}>Метро: {location.metro}</Text>}
        </View>}
      </View>
      <View style={listStyle}>
        {day.list.map((oneDaySchedule) => (
          <View key={oneDaySchedule.id} style={itemStyle}>
            <Text>{oneDaySchedule.name}</Text>
            <Text
              style={styles.time}>{oneDaySchedule.times.start}{oneDaySchedule.times.end ? ` — ${oneDaySchedule.times.end}` : ``}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ScheduleDay;
