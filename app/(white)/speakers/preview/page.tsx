import React, {ReactElement} from "react";
import SpeakerPage from "@/views/speaker-page/speaker-page";
import {similarCourses} from "@/mocs/training";
import {speaker} from "@/mocs/speaker";

const SpeakerPreviewLayout = async (): Promise<ReactElement | null> => {
  return (
    <SpeakerPage speaker={speaker} similarCourses={similarCourses} />
  );
};

export default SpeakerPreviewLayout;
