import React, { useEffect } from "react";
import { Box } from "@cloudscape-design/components";
import { useLayoutAPI } from "../common/context/LayoutAPI";

const NotFoundPage = () => {
  const { hideNavigation } = useLayoutAPI();

  useEffect(() => {
    hideNavigation(true);
  }, []);

  return (
    <Box textAlign="center">
      <Box variant="h1">Oops!</Box>
      <Box variant="p">Sorry, an unexpected error has occurred.</Box>
    </Box>
  );
};

export default NotFoundPage;
