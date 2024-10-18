import React from "react";

function GridWrapper({ children }: { children?: any }) {
  return <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">{children}</div>;
}

export default GridWrapper;
