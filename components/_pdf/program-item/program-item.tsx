import {ProgramThemeName, ProgramType, ProgramTypeName} from "@/helpers/contants";
import {getDeclension} from "@/helpers/helpers";
import {Path, StyleSheet, Svg, Text, View} from "@react-pdf/renderer";
import {Style} from "@react-pdf/types";
import React, {ReactElement} from "react";
import {ProgramItemProps} from "./program-item.props";

const ProgramItem = ({program}: ProgramItemProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: "column",
      gap: 12,
      borderRadius: 25,
      padding: 25,
      backgroundColor: "#fff",
    },
    head: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingBottom: 7,
      borderBottom: "1px solid #E4E7EC",
    },
    name: {
      padding: "2px 3px",
      fontSize: 7,
      color: "#fff",
      borderRadius: 4,
    },
    theory: {
      backgroundColor: "#A13652",
    },
    practice: {
      backgroundColor: "#254885",
    },
    duration: {
      color: "#667085",
      fontSize: 7,
    },
    item: {
      flexDirection: "column",
      gap: 8,
    },
    learnList: {
      gap: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    learnListItem: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
      width: 220,
      fontSize: 8,
    },
    icon: {
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      padding: 6,
      backgroundColor: "#F2F4F7",
      borderRadius: 5,
    },
    title: {
      fontSize: 12,
      color: "#667085",
    },
    themeList: {
      columnGap: 10,
      rowGap: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    themeListItem: {
      flexDirection: "row",
      gap: 4,
      width: 220,
      padding: "5px 7px",
      fontSize: 8,
      backgroundColor: "#F9FAFB",
      borderRadius: 5,
    },
    dot: {
      flexShrink: 0,
      width: 3,
      height: 3,
      marginTop: 3,
      borderRadius: 3,
    },
    blueDot: {
      backgroundColor: "#254885",
    },
    redDot: {
      backgroundColor: "#A13652",
    },
  });

  const nameStyles: Style[] = [styles.name];
  const dotStyles: Style[] = [styles.dot];

  if (program.type === ProgramType.THEORY) {
    nameStyles.push(styles.theory);
    dotStyles.push(styles.redDot);
  }

  if (program.type === ProgramType.PRACTICE) {
    nameStyles.push(styles.practice);
    dotStyles.push(styles.blueDot);
  }

  return (
    <View style={styles.wrapper} wrap={false}>
      <View style={styles.head}>
        <Text style={nameStyles}>{ProgramTypeName[program.type]}</Text>
        {program.duration && <Text
          style={styles.duration}>{`${program.duration} ${getDeclension(program.duration, [`час`, `часа`, `часов`])}`}</Text>}
      </View>
      {(program.learnList && program.learnList.length > 0) && <View style={styles.item}>
        <Text style={styles.title}>Что вы узнаете</Text>
        <View style={styles.learnList}>
          {program.learnList.map((el, index) => <View style={styles.learnListItem} key={index}>
            <View style={styles.icon}>
              <Svg width="10" height="10" viewBox="0 0 24 24">
                <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.576 3.11108C14.6576 3.11108 13.7768 3.46654 13.1274 4.09925L9.04338 8.07825C7.16767 9.90572 5.837 12.1955 5.19364 14.7028L4.9963 15.4718C4.79163 16.2695 5.53319 16.992 6.35188 16.7926L7.14123 16.6003C9.71468 15.9735 12.0649 14.677 13.9406 12.8495L18.0246 8.87055C18.674 8.23784 19.0389 7.37969 19.0389 6.4849C19.0389 4.62159 17.4885 3.11108 15.576 3.11108ZM14.4023 7.6284C15.0275 8.23748 15.7522 8.49693 16.2898 8.40578L16.9187 7.79305C17.2748 7.44611 17.4748 6.97555 17.4748 6.4849C17.4748 5.46317 16.6247 4.63489 15.576 4.63489C15.0724 4.63489 14.5894 4.8298 14.2333 5.17675L13.6044 5.78947C13.5109 6.31322 13.7772 7.01932 14.4023 7.6284Z"
                  fill={program.type === ProgramType.PRACTICE ? "#254885" : "#A13652"} />
                <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.91992 20.127C3.91992 19.7062 4.27004 19.3651 4.70194 19.3651H19.2995C19.7314 19.3651 20.0815 19.7062 20.0815 20.127C20.0815 20.5478 19.7314 20.8889 19.2995 20.8889H4.70194C4.27004 20.8889 3.91992 20.5478 3.91992 20.127Z"
                  fill={program.type === ProgramType.PRACTICE ? "#254885" : "#A13652"} />
              </Svg>
            </View>
            <Text>{el}</Text>
          </View>)}
        </View>
      </View>}
      {(program.themeList && program.themeList.length > 0) && <View style={styles.item}>
        <Text style={styles.title}>{ProgramThemeName[program.type]}</Text>
        <View style={styles.themeList}>
          {program.themeList.map((el, index) => <View style={styles.themeListItem} key={index}>
            <View style={dotStyles}></View>
            <Text>{el}</Text>
          </View>)}
        </View>
      </View>}
    </View>
  );
};

export default ProgramItem;
