import React from "react";
import Layout from "../../common/layout/Layout";
import Nav from "./Nav";
import FormContent from "./FormContent";

const Home = () => {
  return (
    <Layout
      contentType={"form"}
      content={<FormContent />}
      navigation={<Nav />}
    />
  );
};

export default Home;
