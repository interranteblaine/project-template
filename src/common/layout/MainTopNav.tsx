import React, { useEffect, useState } from "react";
import { TopNavigation } from "@cloudscape-design/components";
import {
  applyMode,
  applyDensity,
  Density,
  Mode,
} from "@cloudscape-design/global-styles";
import "@cloudscape-design/global-styles/index.css";

const MainTopNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);

  useEffect(() => {
    const mode = darkMode ? Mode.Dark : Mode.Light;
    applyMode(mode);
  }, [darkMode]);

  useEffect(() => {
    const density = compactMode ? Density.Compact : Density.Comfortable;
    applyDensity(density);
  }, [compactMode]);

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
            type: "button",
            variant: "link",
            text: darkMode ? "Light Mode" : "Dark Mode",
            onClick: () => setDarkMode(!darkMode),
          },
          {
            type: "button",
            variant: "link",
            text: compactMode ? "Comfortable Mode" : "Compact Mode",
            onClick: () => setCompactMode(!compactMode),
          },
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
  );
};

export default MainTopNav;
