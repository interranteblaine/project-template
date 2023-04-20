import React, { ReactNode } from "react";
import {
  ColumnLayout,
  SpaceBetween,
  Box,
  Container,
} from "@cloudscape-design/components";
import { Link } from "react-router-dom";

const ServiceListColumn = ({
  header,
  children,
}: {
  header: string;
  children: ReactNode;
}) => {
  return (
    <SpaceBetween size="xxl">
      <Box textAlign="center">
        <Box variant="h2">{header}</Box>
        <SpaceBetween size="l">{children}</SpaceBetween>
      </Box>
    </SpaceBetween>
  );
};

const ServiceList = () => {
  return (
    <Container>
      <ColumnLayout columns={2} variant="text-grid">
        <ServiceListColumn header="My Services">
          <Link to={"form"}>Form</Link>
        </ServiceListColumn>
        <ServiceListColumn header="Other Services">
          <Link to={"form"}>Form</Link>
        </ServiceListColumn>
      </ColumnLayout>
    </Container>
  );
};

export default ServiceList;
