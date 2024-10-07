import {useEffect, useRef, useState} from "react";

function useOpenModal<T extends HTMLElement>() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = useRef<T>(null!);

  useEffect(() => {
    if (showModal) {
      const onClick = (evt: any) => {
        if (ref.current && !ref.current.contains(evt.target)) {
          setShowModal(false);
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
        }
      };

      document.addEventListener(`keydown`, onKeydown);
      return () => document.removeEventListener(`keydown`, onKeydown);
    }
  }, [showModal]);

  const changeModalActivityStatus = (status: boolean) => {
    setShowModal(status);
  };

  return {ref, showModal, changeModalActivityStatus};
}

export default useOpenModal;
