import React from "react";

function GridWrapper({ children }: { children?: any }) {
  return <div className="grid grid-cols-3 gap-5">{children}</div>;
}

export default GridWrapper;
