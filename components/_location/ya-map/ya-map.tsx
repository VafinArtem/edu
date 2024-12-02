"use client";

import React, {ReactElement} from "react";
import ReactDOM from "react-dom";
import IconPin from "./pin.svg";
import styles from "./ya-map.module.css";
import {YaMapProps} from "./ya-map.props";

const [ymaps3React] = await Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]);
const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = reactify.module(ymaps3);

const YaMap = ({coordinates, markerCoordinates, showMarker}: YaMapProps): ReactElement | null => {
  const location = {center: coordinates, zoom: 17};

  return (
    <YMap location={location} mode="vector">
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />

      {showMarker && markerCoordinates && <YMapMarker coordinates={markerCoordinates}>
        <IconPin className={styles.markerIcon} />
      </YMapMarker>}
    </YMap>
  );
};

export default YaMap;
