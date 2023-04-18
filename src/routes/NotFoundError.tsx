import React from "react";
import { useRouteError } from "react-router-dom";
import Layout from "../common/layout/Layout";
import { Box } from "@cloudscape-design/components";

const NotFoundError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout
      navigationHide={true}
      content={
        <Box textAlign="center">
          <Box variant="h1">Oops!</Box>
          <Box variant="p">Sorry, an unexpected error has occurred.</Box>
        </Box>
      }
    />
  );
};

export default NotFoundError;
