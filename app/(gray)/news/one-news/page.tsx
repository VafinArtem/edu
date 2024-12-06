import OneNewsPage from "@/views/one-news-page/one-news-page";
import React, {ReactElement} from "react";
import styles from "./one-news.module.css";
import {OneNewsProps} from "./one-news.props";

const OneNewsLayout = ({}: OneNewsProps): ReactElement | null => {
  const style = styles;

  return (
    <OneNewsPage />
  );
};

export default OneNewsLayout;
