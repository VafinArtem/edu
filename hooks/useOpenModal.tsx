import {useEffect, useRef, useState} from "react";

function useOpenModal<T extends HTMLElement>(closeCallback?: () => void) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = useRef<T>(null!);

  useEffect(() => {
    if (showModal) {
      const onClick = (evt: MouseEvent) => {
        if (ref.current && !ref.current.contains(evt.target as HTMLElement)) {
          setShowModal(false);

          if (!closeCallback) return;

          closeCallback();
        }
      };
      document.addEventListener(`click`, onClick);
      return () => document.removeEventListener(`click`, onClick);
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      const onKeydown = (evt: KeyboardEvent) => {
        if (evt.key === `Escape`) {
          setShowModal(false);

          if (!closeCallback) return;

          closeCallback();
        }
      };

      document.addEventListener(`keydown`, onKeydown);
      return () => document.removeEventListener(`keydown`, onKeydown);
    }
  }, [showModal]);

  const changeModalActivityStatus = (status: boolean) => {
    setShowModal(status);

    if (!closeCallback) return;

    closeCallback();
  };

  return {ref, showModal, changeModalActivityStatus};
}

export default useOpenModal;
