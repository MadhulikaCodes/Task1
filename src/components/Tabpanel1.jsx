import React from "react";

import Stack from "./Stack";
import backgroundImage from "./bg5.png";

const Tabpanel1 = () => {

  return (
    <div
      className=" bg-cover bg-center w-full "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Stack down="mb-44" />
      {/* <Stack margin="mx-[30%]" width="w-[100%]" /> */}
      <Stack margin="mx-auto lg:mx-[30%]" width="w-full" />
    </div>
  );
};

export default Tabpanel1;
