import React from "react";

const Navigation = props => {

  return (
    <div>
        <button className="button" onClick={() => props.submit()}>
          Conditional Nav
        </button>
    </div>
  );
};

export default Navigation;
