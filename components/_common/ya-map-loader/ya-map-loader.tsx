import React, {ReactElement} from "react";
import Script from "next/script";

const YaMapLoader = (): ReactElement | null => {
  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/3.0/?apikey=3c0d36d0-fac8-410a-a9a1-36eefd5a7aaf&lang=ru_RU`}
      />
    </>
  );
};

export default YaMapLoader;
