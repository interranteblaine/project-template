import React from "react";
import { TopNavigation } from "@cloudscape-design/components";

const MainTopNav = () => {
    return (
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
    )
}

export default MainTopNav