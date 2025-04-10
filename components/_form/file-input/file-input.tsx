"use client";

import clsx from "clsx";
import {ChangeEvent, ForwardedRef, forwardRef, ReactElement, useState} from "react";
import styles from "./file-input.module.css";
import {FileInputProps} from "./file-input.props";

const FileInput = forwardRef(({
  className,
  error,
  isValid,
  labelName,
  onChange,
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
      <label className={styles.inputWrapper}>
        <span>{labelName}</span>
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
        {fileError && <span className={styles.errorMessage}>{fileError}</span>}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </label>
      <div className={styles.files}>
        {fileName}
      </div>
    </div>
  );
});

FileInput.displayName = "Input";

export {FileInput};
