import Script from "next/script";
import React, {ReactElement} from "react";
import {JivoProps} from "./jivo.props";

const Jivo = ({}: JivoProps): ReactElement | null => {
  return (
    <Script src={"//code.jivo.ru/widget/L3iNxuq41X"} strategy={"lazyOnload"} />
  );
};

export default Jivo;
