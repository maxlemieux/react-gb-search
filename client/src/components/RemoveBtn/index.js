import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RemoveBtn(props) {
  return (
    <span className="btn btn-warning" {...props} role="button">
      {props.children}
    </span>
  );
}

export default RemoveBtn;
