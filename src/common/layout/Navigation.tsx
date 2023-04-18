import React from "react";
import {
  SideNavigation,
  SideNavigationProps,
} from "@cloudscape-design/components";

interface NavigationProps {
  items: readonly SideNavigationProps.Item[] | undefined;
  header: SideNavigationProps.Header | undefined;
  initialHref: string | undefined;
}

const Navigation = (props: NavigationProps) => {
  const [activeHref, setActiveHref] = React.useState(props.initialHref);

  return (
    <SideNavigation
      activeHref={activeHref}
      header={props.header}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={props.items}
    />
  );
};

export default Navigation;
