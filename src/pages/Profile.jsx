import React from "react";
import Balances from "../components/Balances";

import Settings from "../components/Settings";
function Profile() {
  return (
    <div className=" w-full max-w-[1200px] p-3 mx-auto flex flex-col lg:flex-row">
      <Settings />
      <Balances />
    </div>
  );
}

export default Profile;
