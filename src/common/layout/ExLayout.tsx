import React, { useRef, useState, useId } from "react";
import {
  AppLayout,
  BreadcrumbGroup,
  ContentLayout,
  AppLayoutProps,
  SideNavigation,
  SideNavigationProps,
  Flashbar,
  FlashbarProps,
  HelpPanel,
  Icon,
  Header,
  Form,
  SpaceBetween,
  Button,
  Container,
  FormField,
  Input,
} from "@cloudscape-design/components";

const ToolsContent = [
  <HelpPanel
    footer={
      <div>
        <h3>
          Learn more <Icon name="external" />
        </h3>
        <ul>
          <li>
            <a href="">Link to documentation</a>
          </li>
          <li>
            <a href="">Link to documentation</a>
          </li>
        </ul>
      </div>
    }
    header={<h2>Help panel title (h2)</h2>}
  >
    <div>
      <p>
        This is a paragraph with some <b>bold text</b> and also some{" "}
        <i>italic text</i>.
      </p>

      <h3>h3 section header</h3>
      <ul>
        <li>Unordered list item.</li>
        <li>Unordered list item.</li>
      </ul>

      <h4>h4 section header</h4>
      <p>
        Code can be formatted as lines of code or blocks of code. Add inline
        code <code>like this</code> using a <code>{"<code>"}</code> tag.
        <pre>
          Or format blocks of code (like this) using a <code>{"<pre>"}</code>{" "}
          tag.
        </pre>
      </p>

      <h5>h5 section header</h5>
      <dl>
        <dt>This is a term</dt>
        <dd>This is its description.</dd>
        <dt>This is a term</dt>
        <dd>This is its description</dd>
      </dl>
    </div>
  </HelpPanel>,
  <HelpPanel
    footer={
      <div>
        <h3>
          Learn more <Icon name="external" />
        </h3>
        <ul>
          <li>
            <a href="">Link to documentation</a>
          </li>
          <li>
            <a href="">Link to documentation</a>
          </li>
        </ul>
      </div>
    }
    header={<h2>Help panel title (h2)</h2>}
  >
    <div>
      <p>
        This is a paragraph with some <b>bold text</b> and also some{" "}
        <i>italic text</i>.
      </p>

      <h3>h3 section header</h3>
      <ul>
        <li>Unordered list item.</li>
        <li>Unordered list item.</li>
      </ul>

      <h4>h4 section header</h4>
      <p>
        Code can be formatted as lines of code or blocks of code. Add inline
        code <code>like this</code> using a <code>{"<code>"}</code> tag.
        <pre>
          Or format blocks of code (like this) using a <code>{"<pre>"}</code>{" "}
          tag.
        </pre>
      </p>

      <h5>h5 section header</h5>
      <dl>
        <dt>This is a term</dt>
        <dd>This is its description.</dd>
        <dt>This is a term</dt>
        <dd>This is its description</dd>
      </dl>
    </div>
  </HelpPanel>,
];

function useDisclaimerFlashbarItem(
  onDismiss: (id: string) => void
): FlashbarProps.MessageDefinition | null {
  const id = useId();

  return {
    type: "info",
    dismissible: true,
    dismissLabel: "Dismiss message",
    onDismiss: () => onDismiss(id),
    statusIconAriaLabel: "info",
    content: (
      <>
        This demo is an example of Cloudscape Design System patterns and
        components, and may not reflect the current patterns and components of
        AWS services.
      </>
    ),
    id,
  };
}

function useNotifications(showSuccessNotification = false) {
  const successId = useId();
  const [successDismissed, dismissSuccess] = useState(false);
  const [disclaimerDismissed, dismissDisclaimer] = useState(false);

  const disclaimerItem = useDisclaimerFlashbarItem(() =>
    dismissDisclaimer(true)
  );

  const notifications: Array<FlashbarProps.MessageDefinition> = [];

  if (disclaimerItem && !disclaimerDismissed) {
    notifications.push(disclaimerItem);
  }

  if (showSuccessNotification && !successDismissed) {
    notifications.push({
      type: "success",
      content: "Resource created successfully",
      statusIconAriaLabel: "success",
      dismissLabel: "Dismiss message",
      dismissible: true,
      onDismiss: () => dismissSuccess(true),
      id: successId,
    });
  }

  return notifications;
}

interface NotificationsProps {
  successNotification?: boolean;
}

function Notifications({ successNotification }: NotificationsProps) {
  const notifications = useNotifications(successNotification);
  return <Flashbar items={notifications} />;
}

const navHeader = { text: "Service", href: "#/" };

const navItems: SideNavigationProps["items"] = [
  {
    type: "section",
    text: "Reports and analytics",
    items: [
      { type: "link", text: "Distributions", href: "#/distributions" },
      { type: "link", text: "Cache statistics", href: "#/cache" },
      { type: "link", text: "Monitoring and alarms", href: "#/monitoring" },
      { type: "link", text: "Popular objects", href: "#/popular" },
      { type: "link", text: "Top referrers", href: "#/referrers" },
      { type: "link", text: "Usage", href: "#/usage" },
      { type: "link", text: "Viewers", href: "#/viewers" },
    ],
  },
  {
    type: "section",
    text: "Private content",
    items: [
      { type: "link", text: "How-to guide", href: "#/howto" },
      { type: "link", text: "Origin access identity", href: "#/origin" },
    ],
  },
];

const defaultOnFollowHandler: SideNavigationProps["onFollow"] = (event) => {
  // keep the locked href for our demo pages
  event.preventDefault();
};

interface NavigationProps {
  activeHref?: string;
  header?: SideNavigationProps["header"];
  items?: SideNavigationProps["items"];
  onFollowHandler?: SideNavigationProps["onFollow"];
}

function Navigation({
  activeHref,
  header = navHeader,
  items = navItems,
  onFollowHandler = defaultOnFollowHandler,
}: NavigationProps) {
  return (
    <SideNavigation
      items={items}
      header={header}
      activeHref={activeHref}
      onFollow={onFollowHandler}
    />
  );
}

const appLayoutAriaLabels: AppLayoutProps.Labels = {
  navigation: "Side navigation",
  navigationToggle: "Open side navigation",
  navigationClose: "Close side navigation",
  notifications: "Notifications",
  tools: "Help panel",
  toolsToggle: "Open help panel",
  toolsClose: "Close help panel",
};

const resourcesBreadcrumbs = [
  {
    text: "Service",
    href: "#",
  },
  {
    text: "Distributions",
    href: "#",
  },
];

const resourceCreateBreadcrumbs = [
  ...resourcesBreadcrumbs,
  {
    text: "Create distribution",
    href: "#",
  },
];

const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={resourceCreateBreadcrumbs}
    expandAriaLabel="Show path"
    ariaLabel="Breadcrumbs"
  />
);

const ExLayout = () => {
  const [toolsIndex, setToolsIndex] = useState(0);
  const [toolsOpen, setToolsOpen] = useState(false);
  const appLayout = useRef(null);

  const loadHelpPanelContent = (index: number) => {
    setToolsIndex(index);
    setToolsOpen(true);
    console.log(appLayout.current);
    // appLayout.current?.focusToolsClose();
  };

  return (
    <AppLayout
      ref={appLayout}
      contentType="form"
      content={
        <form onSubmit={(e) => e.preventDefault()}>
          <Form
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button formAction="none" variant="link">
                  Cancel
                </Button>
                <Button variant="primary">Submit</Button>
              </SpaceBetween>
            }
            header={<Header variant="h1">Form header</Header>}
          >
            <Container
              header={<Header variant="h2">Form container header</Header>}
            >
              <SpaceBetween direction="vertical" size="l">
                <FormField label="First field">
                  <Input value="" />
                </FormField>
                <FormField label="Second field">
                  <Input value="" />
                </FormField>
                <FormField label="Third field">
                  <Input value="" />
                </FormField>
              </SpaceBetween>
            </Container>
          </Form>
        </form>
      }
      breadcrumbs={<Breadcrumbs />}
      navigation={<Navigation activeHref="#/distributions" />}
      tools={ToolsContent[toolsIndex]}
      toolsOpen={toolsOpen}
      onToolsChange={({ detail }) => setToolsOpen(detail.open)}
      ariaLabels={appLayoutAriaLabels}
      notifications={<Notifications />}
    />
  );
};

export default ExLayout;
