import React, { memo, useContext, useEffect } from "react";
import { TrackerContext } from "../../Context/trackerContext";

const TrackerLayer = ({ children }: any) => {
  const { initTracker, startTracking } = useContext(TrackerContext);
  useEffect(() => {
    initTracker();
    startTracking();
  }, []);

  return <>{children}</>;
};

export default memo(TrackerLayer);
