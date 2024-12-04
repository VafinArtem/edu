"use client";

import Header from "@/layout/header/header";
import {usePathname} from "next/navigation";
import React, {ReactElement} from "react";
import {DynamicHeaderProps} from "./dynamic-header.props";

const DynamicHeader = ({}: DynamicHeaderProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <Header type={pathname === `/` ? "blur" : "gray"} />
  );
};

export default DynamicHeader;
