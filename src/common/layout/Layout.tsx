import React, { ReactNode, useRef } from "react";
import {
  AppLayout,
  AppLayoutProps,
  TopNavigation,
} from "@cloudscape-design/components";

interface LayoutProps {
  contentType?: AppLayoutProps.ContentType;
  content?: ReactNode;
  navigation?: ReactNode;
  notifications?: ReactNode;
  breadcrumbs?: ReactNode;
  splitPanelContent?: ReactNode;
  splitPanelOpen?: boolean;
  navigationHide?: boolean
}

const Layout = (props: LayoutProps) => {
  const appLayout = useRef(null);

  return (
    <>
      <div id="h" style={{ position: "sticky", top: 0, zIndex: 1002 }}>
        <TopNavigation
          i18nStrings={{
            overflowMenuTriggerText: "More",
            overflowMenuTitleText: "All",
          }}
          identity={{ href: "#", title: "App" }}
          utilities={[
            {
              type: "menu-dropdown",
              text: "Customer Name",
              description: "email@example.com",
              iconName: "user-profile",
              items: [
                { id: "profile", text: "Profile" },
                { id: "signout", text: "Sign out" },
              ],
            },
          ]}
        />
      </div>
      <AppLayout
        ref={appLayout}
        toolsHide={true}
        navigationHide={props.navigationHide}
        contentType={props.contentType}
        content={props.content}
        navigation={props.navigation}
        notifications={props.notifications}
        breadcrumbs={props.breadcrumbs}
        splitPanel={props.splitPanelContent}
        splitPanelOpen={props.splitPanelOpen}
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

export default Layout;
