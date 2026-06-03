import React from "react";

const Tabs = ({tab}) => {
  return (
      <div className="tab" id={`${tab}-Tab`}>
        {tab}
      </div>
  )
}

export default Tabs