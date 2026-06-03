import React from "react";

const Tabs = ({tab}) => {
  return (
      <div className="tab">
        <div id={`${tab}-Tab`}>
          {tab}
        </div>
      </div>
  )
}

export default Tabs