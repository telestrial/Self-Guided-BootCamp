import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph evaluated.");
  return <p>{props.children}</p>;
};

export default MyParagraph;
