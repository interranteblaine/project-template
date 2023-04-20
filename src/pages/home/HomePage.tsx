import React, { useEffect } from "react";
import { Box, SpaceBetween } from "@cloudscape-design/components";
import { useLayoutAPI } from "../../common/context/LayoutAPI";
import HomeSideNav from "./HomeSideNav";
import ServiceList from "./ServiceList";

const HomePage = () => {
  const { setNavigation } = useLayoutAPI();

  useEffect(() => {
    setNavigation(<HomeSideNav />);
  }, []);

  return (
    <SpaceBetween size="xxl">
      <Box textAlign="center">
        <Box variant="h1">Welcome Home</Box>
        <Box variant="p">This is the homepage.</Box>
      </Box>
      <ServiceList />
    </SpaceBetween>
  );
};

export default HomePage;
