import React from 'react'

function Maintenance() {
  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f2f2f2"
        }}
    >
      <h1>Site Under Maintenance</h1>
      <p>Please check back later</p>
        <img src="/road-block.png" alt="road closed sign" style={{ width: "200px" }} />
    </div>
  )
}

export default Maintenance