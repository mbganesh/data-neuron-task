import React from "react";
import PanelGroup from "react-panelgroup";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

const Panels = () => {
  return (
    <div
    >
      <PanelGroup direction="row" borderColor="#000">
        <PanelGroup direction="column" borderColor="#000">
          <ComponentOne />
          <ComponentTwo />
        </PanelGroup>
        <ComponentThree />
      </PanelGroup>
    </div>
  );
};

export default Panels;
