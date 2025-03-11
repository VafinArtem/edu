"use client";

import {Route} from "@/helpers/route";
import Header from "@/layout/header/header";
import {usePathname} from "next/navigation";
import React, {ReactElement} from "react";
import {DynamicHeaderProps} from "./dynamic-header.props";

const blurPathname = [Route.ABOUT, "/"];

const DynamicHeader = ({}: DynamicHeaderProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <Header type={blurPathname.includes(pathname) ? "blur" : "gray"} />
  );
};

export default DynamicHeader;
