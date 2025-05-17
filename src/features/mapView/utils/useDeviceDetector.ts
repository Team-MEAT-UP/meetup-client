import { useEffect, useState } from "react";

type DeviceType = "iPhone" | "Android" | "Windows PC" | "Mac PC" | "Unknown Device";

export const useDeviceDetector = (): DeviceType => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceType>("Unknown Device");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/iPhone/i.test(userAgent)) {
      setDeviceInfo("iPhone");
    } else if (/Android/i.test(userAgent)) {
      setDeviceInfo("Android");
    } else if (/Windows NT/i.test(userAgent)) {
      setDeviceInfo("Windows PC");
    } else if (/Macintosh/i.test(userAgent)) {
      setDeviceInfo("Mac PC");
    } else {
      setDeviceInfo("Unknown Device");
    }
  }, []);

  return deviceInfo;
};
