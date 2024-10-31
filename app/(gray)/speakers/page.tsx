import React, {ReactElement} from "react";
import SpeakersPage from "@/views/speakers-page/speakers-page";

const SpeakersLayout = async (): Promise<ReactElement | null> => {
  return (<SpeakersPage />);
};

export default SpeakersLayout;
