import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TailSpin color="#031434" height={40} width={40} />
    </div>
  );
}

export default Loader;
