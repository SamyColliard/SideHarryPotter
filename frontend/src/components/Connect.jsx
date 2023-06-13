import React from "react"
import Plume from "../assets/Plumes.svg"
export default function Connect() {
  return (
    <div className="connectAll">
      <div className="connectForm">
        <img className="plume" src={Plume} />
        <h3 className="connect">Connection Inscription</h3>
      </div>
    </div>
  )
}
