import Speaker from "@/components/_pdf/speaker/speaker";
import {Path, StyleSheet, Svg, Text, View} from "@react-pdf/renderer";
import React, {ReactElement} from "react";
import {TopProps} from "./top.props";

const Top = ({
  name,
  description,
  courseType,
  date,
  location,
  speakers,
  colors,
}: TopProps): ReactElement | null => {
  const styles = StyleSheet.create({
    wrapper: {
      flexShrink: 0,
      flexDirection: "column",
      gap: 12,
      backgroundColor: colors.background,
      borderRadius: 25,
      padding: 25,
    },
    tags: {
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
    },
    content: {
      flexShrink: 0,
      flexDirection: "column",
      gap: 17,
    },
    name: {
      fontSize: 18,
      color: "#fff",
    },
    description: {
      fontSize: 8,
      color: colors.text,
    },
    speakers: {
      flexDirection: "column",
      gap: 8,
    },
    courseType: {
      padding: "3px 4px",
      color: colors.background,
      fontSize: 7,
      fontWeight: 500,
      lineHeight: 1.1,
      backgroundColor: "#fff",
      borderRadius: 4,
      border: "1px solid #fff",
    },
    tag: {
      flexDirection: "row",
      alignItems: "center",
      gap: 2,
      padding: "3px 4px",
      color: "#fff",
      fontSize: 7,
      lineHeight: 1.1,
      borderRadius: 4,
      border: "1px solid #fff",
    },
    icon: {
      flexShrink: 0,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.tags}>
        <View style={styles.courseType}>
          <Text>{courseType}</Text>
        </View>

        {date && <View style={styles.tag}>
          <Svg style={styles.icon} width="7" height="7" viewBox="0 0 20 20">
            <Path d="M14.5 2.5V4M5.5 2.5V4M8 10H7.20883M13.0002 10H12.209M8.00016 13.75H7.20898M13.0002 13.75H12.209"
              stroke="white" stroke-width="1.87624" stroke-linecap="round" stroke-linejoin="round" />
            <Path
              d="M2.875 10.1824C2.875 6.91445 2.875 5.28046 3.81409 4.26523C4.75318 3.25 6.26462 3.25 9.2875 3.25L10.7125 3.25C13.7354 3.25 15.2468 3.25 16.1859 4.26523C17.125 5.28046 17.125 6.91445 17.125 10.1824V10.5676C17.125 13.8355 17.125 15.4695 16.1859 16.4848C15.2468 17.5 13.7354 17.5 10.7125 17.5H9.2875C6.26462 17.5 4.75318 17.5 3.81409 16.4848C2.875 15.4695 2.875 13.8355 2.875 10.5676V10.1824Z"
              stroke="white" stroke-width="1.87624" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M3.25 7L16.75 7" stroke="white" stroke-width="1.87624" stroke-linecap="round"
              stroke-linejoin="round" />
          </Svg>
          <Text>{date}</Text>
        </View>}
        {location && <View style={styles.tag}>
          <Svg style={styles.icon} width="7" height="7" viewBox="0 0 20 20">
            <Path
              d="M11.4503 7.68292C11.4503 8.53323 10.761 9.22253 9.91071 9.22253C9.0604 9.22253 8.37109 8.53323 8.37109 7.68292C8.37109 6.83262 9.0604 6.14331 9.91071 6.14331C10.761 6.14331 11.4503 6.83262 11.4503 7.68292Z"
              fill="white" />
            <Path
              d="M14.5315 13.6235C15.567 15.1001 16.0623 15.8864 15.7673 16.5195C15.7377 16.5829 15.703 16.6442 15.6636 16.7027C15.237 17.3363 14.1344 17.3363 11.9292 17.3363H7.89304C5.68787 17.3363 4.58528 17.3363 4.15865 16.7027C4.11925 16.6442 4.08461 16.5829 4.05502 16.5195C3.75996 15.8864 4.25529 15.1001 5.2908 13.6235"
              stroke="white" stroke-width="1.88" stroke-linecap="round" stroke-linejoin="round" />
            <Path
              d="M10.8445 13.9899C10.594 14.2311 10.2593 14.366 9.91088 14.366C9.5625 14.366 9.22775 14.2311 8.9773 13.9899C6.68385 11.7676 3.61034 9.28507 5.1092 5.68086C5.91962 3.7321 7.86499 2.48511 9.91088 2.48511C11.9568 2.48511 13.9021 3.7321 14.7126 5.68086C16.2095 9.28052 13.1436 11.7753 10.8445 13.9899Z"
              stroke="white" stroke-width="1.88" />
          </Svg>
          <Text>
            {location}
          </Text>
        </View>}
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.speakers}>
        {speakers.map((speaker) => <Speaker
          speaker={speaker}
          key={speaker.id}
          positionColor={colors.text}
        />)}
      </View>
    </View>
  );
};

export default Top;
