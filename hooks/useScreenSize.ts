import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";
type Orientation = "portait" | "landscape";

interface ScreenSize {
  deviceType: DeviceType;
  orientation: Orientation;
}

const getScreenInfo: () => ScreenSize = () => {
  let deviceType: DeviceType | null = null;
  let orientation: Orientation | null = null;

  // assign device type
  if (window.innerWidth <= 768 && window.innerHeight <= 1024) {
    deviceType = "mobile";
  } else if (
    window.innerWidth <= 1024 &&
    window.innerHeight > window.innerWidth
  ) {
    deviceType = "tablet";
  } else if (
    window.innerWidth <= 1024 &&
    window.innerHeight <= window.innerWidth
  ) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }

  // assign device orientation
  if (window.innerHeight > window.innerWidth) {
    orientation = "portait";
  } else {
    orientation = "landscape";
  }

  return {
    deviceType,
    orientation,
  };
};

const useScreenSize: () => ScreenSize = () => {
  useEffect;
  const [screenInfo, setScreenInfo] = useState<{
    deviceType: DeviceType | null;
    orientation: Orientation | null;
  }>({
    deviceType: null,
    orientation: null,
  });

  const resizeFunction = () => {
    setScreenInfo(getScreenInfo());
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    setScreenInfo(getScreenInfo());

    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  return {
    deviceType: screenInfo.deviceType as DeviceType,
    orientation: screenInfo.orientation as Orientation,
  };
};

export default useScreenSize;
