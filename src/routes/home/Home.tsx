import React, { useEffect } from "react";
import { useLayoutAPI } from "../../common/context/LayoutAPI";
import FormContent from "./FormContent";
import HomeSideNav from "./HomeSideNav";

const Home = () => {
  const {setContentType, setNavigation } = useLayoutAPI()

  useEffect(() => {
    setContentType("form")
    setNavigation(<HomeSideNav />)
  }, [])

  return (
    <FormContent />
  )
};

export default Home;
