import {useLayoutEffect, useState} from "react";

const useIsResolution = (resolution: {min: number, max: number} | number): boolean => {
  const [isResolution, setIsResolution] = useState(false);

  const condition = () => typeof resolution !== "number" ? (window.innerWidth >= resolution.min && window.innerWidth <= resolution.max) : window.innerWidth <= resolution;

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsResolution(condition());
    };

    updateSize();

    window.addEventListener("resize", updateSize);
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isResolution;
};

export default useIsResolution;
