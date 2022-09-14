import { createContext } from "react";
import Tracker from "@openreplay/tracker";
import { v4 as uuidV4 } from "uuid";
import { useReducer } from "react";

export const TrackerContext = createContext<{
  startTracking: () => void;
  initTracker: () => void;
}>({
  startTracking: () => {},
  initTracker: () => {},
});

function defaultGetUserId() {
  return uuidV4();
}

function newTracker(config: any) {
  const getUserId =
    config?.userIdEnabled && config?.getUserId
      ? config.getUserId
      : defaultGetUserId;
  let userId = null;

  const trackerConfig = {
    projectKey:
      config?.projectKey || process.env.NEXT_PUBLIC_OPENREPLAY_PROJECT_KEY,
  };

  const tracker = new Tracker(trackerConfig);

  if (config?.userIdEnabled) {
    userId = getUserId();
    tracker.setUserID(userId);
  }
  return tracker;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "init": {
      if (!state.tracker) {
        return { ...state, tracker: newTracker(state.config) };
      }
      return state;
    }
    case "start": {
      state.tracker.start();
      return state;
    }
  }
}

export default function TrackerProvider({ children, config }: any) {
  let [state, dispatch] = useReducer(reducer, { tracker: null, config });

  let value = {
    startTracking: () => dispatch({ type: "start" }),
    initTracker: () => dispatch({ type: "init" }),
  };

  return (
    <TrackerContext.Provider value={value}>{children}</TrackerContext.Provider>
  );
}
