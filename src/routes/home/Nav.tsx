import React from "react";
import Navigation from "../../common/layout/Navigation";
import { SideNavigationProps, Badge } from "@cloudscape-design/components";

const navItems: readonly SideNavigationProps.Item[] = [
  { type: "link", text: "Page 1", href: "#/page1" },
  { type: "link", text: "Page 2", href: "#/page2" },
  { type: "link", text: "Page 3", href: "#/page3" },
  { type: "link", text: "Page 4", href: "#/page4" },
  { type: "divider" },
  {
    type: "link",
    text: "Notifications",
    href: "#/notifications",
    info: <Badge color="red">23</Badge>,
  },
  {
    type: "link",
    text: "Documentation",
    href: "https://example.com",
    external: true,
  },
];

const Nav = () => {
  return (
    <Navigation
      items={navItems}
      header={{ href: "#/", text: "Service name" }}
      initialHref="#/page1"
    />
  );
};

export default Nav;
