import React, { useRef } from "react";
import { AppLayout } from "@cloudscape-design/components";
import { useLayout } from "../context/LayoutAPI";
import { Outlet } from "react-router-dom";
import MainTopNav from "./MainTopNav";

const MainLayout = () => {
  const appLayout = useRef(null);
  const state = useLayout();

  return (
    <>
      <MainTopNav />
      <AppLayout
        ref={appLayout}
        toolsHide={true}
        navigationHide={state.navigationHide}
        contentType={state.contentType}
        content={<Outlet />}
        navigation={state.navigation}
        notifications={state.notifications}
        breadcrumbs={state.breadcrumbs}
        splitPanel={state.splitPanelContent}
        splitPanelOpen={state.splitPanelOpen}
        splitPanelPreferences={{ position: "bottom" }}
        ariaLabels={{
          navigation: "Side navigation",
          navigationToggle: "Open side navigation",
          navigationClose: "Close side navigation",
          notifications: "Notifications",
        }}
      />
    </>
  );
};

export default MainLayout;
