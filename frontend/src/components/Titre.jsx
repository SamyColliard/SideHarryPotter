import Logo from "../assets/Livre.svg"
import React from "react"

export default function Titre() {
  return (
    <div className="Titre">
      <div className="warp" aria-labelledby="warp-label">
        <span id="warp-label" className="warp__placeholder">
          .Livres Interactifs.
        </span>

        <span>
          <span className="warp__0">.</span>
          <span className="warp__1">L</span>
          <span className="warp__2">i</span>
          <span className="warp__3">v</span>
          <span className="warp__4">r</span>
          <span className="warp__5">e</span>
          <span className="warp__6">s</span>
          <span className="warp__7"></span>
          <span className="warp__8">I</span>
          <span className="warp__9">n</span>
          <span className="warp__10">t</span>
          <span className="warp__11">e</span>
          <span className="warp__12">r</span>
          <span className="warp__13">a</span>
          <span className="warp__14">c</span>
          <span className="warp__15">t</span>
          <span className="warp__16">i</span>
          <span className="warp__17">f</span>
          <span className="warp__19">s</span>
          <span className="warp__18">.</span>
        </span>
      </div>
      <div className="warp1" aria-labelledby="warp-label">
        <span id="warp-label" className="warp__placeholder">
          Harry Potter
        </span>

        <span>
          <span className="warp__0">H</span>
          <span className="warp__1">a</span>
          <span className="warp__2">r</span>
          <span className="warp__3">r</span>
          <span className="warp__4">y</span>
          <span className="warp__5"></span>
          <span className="warp__6"></span>
          <span className="warp__7">P</span>
          <span className="warp__8">o</span>
          <span className="warp__9">t</span>
          <span className="warp__10">t</span>
          <span className="warp__11">e</span>
          <span className="warp__12">r</span>
        </span>
      </div>

      <img className="logo" src={Logo} />
    </div>
  )
}
