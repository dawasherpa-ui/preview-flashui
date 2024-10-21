import React from "react";

function layout({ children }: any) {
  return (
    <div className=" min-h-screen grid place-items-center">{children}</div>
  );
}

export default layout;
