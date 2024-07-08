import React from "react";
import TabPanel from "../components/TabPanel";
import Tabpanel1 from "../components/Tabpanel1";
import TabPanel2 from "../components/TabPanel2";

const Essentials = () => {
  return (
    <>
      <div className="">
        <TabPanel></TabPanel>
        <Tabpanel1 />
        <TabPanel2 />
      </div>
    </>
  );
};

export default Essentials;
