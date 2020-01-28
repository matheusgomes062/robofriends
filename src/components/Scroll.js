import React from "react";

const Scroll = props => {
  return (
    <React.Fragment>
      <div
        style={{
          overflow: "scroll",
          borderTop: "5px solid black",
          height: "800px"
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Scroll;
