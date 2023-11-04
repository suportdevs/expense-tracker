import React from "react";
import Header from "../Header/Header";

const DefaultLayout = (props) => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto">{props.children}</div>
    </>
  );
};

export default DefaultLayout;
