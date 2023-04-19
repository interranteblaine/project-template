import React, {
  ReactNode,
  createContext,
  useReducer,
  useMemo,
  useContext,
} from "react";
import { AppLayoutProps } from "@cloudscape-design/components";

type State = {
  contentType: AppLayoutProps.ContentType;
  navigation: ReactNode;
  notifications: ReactNode;
  breadcrumbs: ReactNode;
  splitPanelContent: ReactNode;
  splitPanelOpen: boolean;
  navigationHide: boolean;
};

type API = {
  setContentType: (contentType: AppLayoutProps.ContentType) => void;
  setNavigation: (navigation: ReactNode) => void;
  setNotifications: (notifications: ReactNode) => void;
  setBreadcrumbs: (breadcrumbs: ReactNode) => void;
  setSplitPanelContent: (splitPanelContent: ReactNode) => void;
  showSplitPanel: (show: boolean) => void;
  hideNavigation: (hide: boolean) => void;
};

const LayoutContext = createContext<State>({} as State);

const LayoutAPIContext = createContext<API>({} as API);

type Actions =
  | { type: "updateContentType"; contentType: AppLayoutProps.ContentType }
  | { type: "updateNavigation"; navigation: ReactNode }
  | { type: "updateNotifications"; notifications: ReactNode }
  | { type: "updateBreadcrumbs"; breadcrumbs: ReactNode }
  | { type: "updateSplitPanelContent"; splitPanelContent: ReactNode }
  | { type: "showSplitPanel"; show: boolean }
  | { type: "hideNavigation"; hide: boolean };

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "updateContentType":
      return { ...state, contentType: action.contentType };
    case "updateNavigation":
      return { ...state, navigation: action.navigation };
    case "updateNotifications":
      return { ...state, notifications: action.notifications };
    case "updateBreadcrumbs":
      return { ...state, breadcrumbs: action.breadcrumbs };
    case "updateSplitPanelContent":
      return { ...state, splitPanelContent: action.splitPanelContent };
    case "showSplitPanel":
      return { ...state, splitPanelOpen: action.show };
    case "hideNavigation":
      return { ...state, navigationHide: action.hide };
  }
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {} as State);

  const api = useMemo(() => {
    const setContentType = (contentType: AppLayoutProps.ContentType) => {
      dispatch({ type: "updateContentType", contentType });
    };

    const setNavigation = (navigation: ReactNode) => {
      dispatch({ type: "updateNavigation", navigation });
    };

    const setNotifications = (notifications: ReactNode) => {
      dispatch({ type: "updateNotifications", notifications });
    };

    const setBreadcrumbs = (breadcrumbs: ReactNode) => {
      dispatch({ type: "updateBreadcrumbs", breadcrumbs });
    };

    const setSplitPanelContent = (splitPanelContent: ReactNode) => {
      dispatch({ type: "updateSplitPanelContent", splitPanelContent });
    };

    const showSplitPanel = (show: boolean) => {
      dispatch({ type: "showSplitPanel", show });
    };

    const hideNavigation = (hide: boolean) => {
      dispatch({ type: "hideNavigation", hide });
    };

    return {
      setContentType,
      setNavigation,
      setNotifications,
      setBreadcrumbs,
      setSplitPanelContent,
      showSplitPanel,
      hideNavigation,
    };
  }, []);

  return (
    <LayoutAPIContext.Provider value={api}>
      <LayoutContext.Provider value={state}>{children}</LayoutContext.Provider>
    </LayoutAPIContext.Provider>
  );
};

export const useLayoutAPI = () => useContext(LayoutAPIContext);
export const useLayout = () => useContext(LayoutContext);
