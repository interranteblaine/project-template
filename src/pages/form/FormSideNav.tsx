import React from "react";
import Navigation from "../../common/layout/Navigation";
import { SideNavigationProps, Badge } from "@cloudscape-design/components";

const navItems: readonly SideNavigationProps.Item[] = [
  { type: "link", text: "Page 1", href: "#/page1" },
  { type: "divider" },
  {
    type: "link",
    text: "Notifications",
    href: "#/notifications",
    info: <Badge color="red">23</Badge>,
  },
];

const FormSideNav = () => {
  return (
    <Navigation
      items={navItems}
      header={{ href: "#/", text: "Form" }}
      initialHref="#/page1"
    />
  );
};

export default FormSideNav;
