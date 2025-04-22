"use client";

import File from "@/components/_form/file-input/components/file/file";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import {ChangeEvent, ForwardedRef, forwardRef, ReactElement, useState} from "react";
import DownloadIcon from "./download.svg";
import styles from "./file-input.module.css";
import {FileInputProps} from "./file-input.props";

const FileInput = forwardRef(({
  description,
  className,
  error,
  labelName,
  onChange,
  color,
  ...props
}: FileInputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement | null => {
  const acceptedFormats = ["jpg", "jpeg", "png"];
  const maxSizeMb = 5;

  const [fileError, setFileError] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file = event.target.files?.[0];

    if (!file) return;

    setFileError(``);

    const fileExtension = file.name.split(".").pop()?.toLowerCase() ?? "";

    if (!acceptedFormats.includes(fileExtension)) {
      setFileError(`Не верный формат ${fileExtension}`);
      target.value = "";
      return;
    }

    if (file.size > maxSizeMb * 1000000) {
      setFileError(`Превышен максимальный размер файла ${maxSizeMb}Mb`);
      target.value = "";
      return;
    }

    setFileName(file.name);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={clsx(className, styles.wrapper)}>
      <Paragraph className={styles.title}>{description}</Paragraph>
      {!fileName && <>
        <label className={styles.inputWrapper}>
          <span className={clsx(styles.button, {
            [styles.primary]: color === "primary",
            [styles.primary2]: color === "primary-2",
          })}>{labelName} <DownloadIcon /></span>
          <input
            className={styles.input}
            accept=".jpg,.jpeg,.png,"
            type={"file"}
            ref={ref}
            onChange={(evt) => {
              handleChange(evt);
            }}
            {...props}
          />
        </label>
        <div className={styles.messages}>
          {fileError && <Paragraph className={clsx(styles.message, styles.error)}>{fileError}</Paragraph>}
          {error && <Paragraph className={clsx(styles.message, styles.error)}>{error.message}</Paragraph>}
          {(!fileError && !error) && <Paragraph className={styles.message}>
            Допустимые форматы: {acceptedFormats.join(", ")}.<br /> Максимальный размер — {maxSizeMb} МБ.
          </Paragraph>}
        </div>
      </>}
      {fileName && <div className={styles.files}>
        <File name={fileName} onRemove={() => {
          setFileName("");
          handleChange({
            target: {files: null},
          } as ChangeEvent<HTMLInputElement>);
        }} />
      </div>}
    </div>
  );
});

FileInput.displayName = "Input";

export {FileInput};
