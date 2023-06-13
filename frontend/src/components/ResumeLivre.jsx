import React from "react"
import ReactAudioPlayer from "react-audio-player"
import Resumer1 from "../assets/audio/Resumer1.ogg"
import PropTypes from "prop-types"

export default function ResumeLivre({ closeModal }) {
  return (
    <div className="modalBackground" onClick={() => closeModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="bouton">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h3>RESUME</h3>
        </div>
        <div className="player">
          <ReactAudioPlayer src={Resumer1} controls />
          <p className="resumeText">
            Harry Potter est un garcon ordinaire. Mais, le jour de ses onze ans,
            son existence bascule : un geant vient le chercher pour l'emmener
            dans une ecole de sorciers. Voler a cheval sur des balais, jeter des
            sorts, combattre les Trolls : Harry Potter se revele etre un sorcier
            vraiment doue. Mais quel mystere entoure donc sa naissance et qui
            est l'effroyable V..., le mage noir dont personne n'ose prononcer le
            nom ?
          </p>
        </div>
      </div>
    </div>
  )
}
ResumeLivre.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
