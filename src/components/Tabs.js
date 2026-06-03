import React from "react";

const Tabs = ({tab}) => {
  return (
    <div className="tabs">
      <div className="tab" id={`${tab}-Tab`}>
        {tab}
      </div>
    </div>
  )
}

export default Tabs