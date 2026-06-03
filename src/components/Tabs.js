import React from "react";

const Tabs = ({tab}) => {
  return (
      <div id={`${tab}-Tab`}>
        <div className="tab">
          {tab}
        </div>
      </div>
  )
}

export default Tabs