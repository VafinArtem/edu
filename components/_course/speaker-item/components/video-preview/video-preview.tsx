"use client";

import clsx from "clsx";
import React, {ReactElement, useRef, useState} from "react";
import IconPlay from "./play.svg";
import styles from "./video-preview.module.css";
import {VideoPreviewProps} from "./video-preview.props";

const VideoPreview = ({video, className, background}: VideoPreviewProps): ReactElement | null => {
  const [showControls, setShowControls] = useState<boolean>(false);
  const [showPlay, setShowPlay] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement>(null!);

  return (
    <>
      <video
        ref={videoRef}
        controls={showControls}
        onPlay={() => {
          setShowControls(true);
        }}
        src={video.url}
        className={clsx(className, styles.video)}
        style={{backgroundColor: background}}
        poster={video.poster ? `${process.env.NEXT_PUBLIC_IMAGE_SERVER}${video.poster}` : undefined}>
      </video>
      {showPlay && <button type={"button"} className={styles.button} onClick={() => {
        setShowControls(true);
        setShowPlay(false);

        videoRef.current?.play().then();
      }}>
        <span className="visually-hidden">Включить видео</span>
        <IconPlay />
      </button>}
    </>
  );
};

export default VideoPreview;
