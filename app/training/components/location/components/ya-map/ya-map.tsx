"use client";
import React, {ReactElement} from "react";
import ReactDOM from "react-dom";
import {YaMapProps} from "./ya-map.props";

const ymaps3Reactify = await ymaps3.import("@yandex/ymaps3-reactify");
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);
const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = reactify.module(ymaps3);

const YaMap = ({coordinates}: YaMapProps): ReactElement | null => {
  const location = {center: coordinates, zoom: 17};

  return (
    <>
      <YMap location={location} mode="vector">
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />
      </YMap>
    </>
  );
};

export default YaMap;
