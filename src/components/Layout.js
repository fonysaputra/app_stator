import React from 'react'
// import { withRedux } from "../../lib/with-redux-store";

function Layout({ children }) {
  return (
    <div>
      <div className="content content-fixed ">
        <div
        // style={{
        //   paddingTop: 80,
        //   marginLeft: "19%",
        // }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
