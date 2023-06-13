import React from "react"
import PropTypes from "prop-types"

export default function Chapter({ closeModal }) {
  return (
    <div className="modalBackgroundChapter" onClick={() => closeModal(false)}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="bouton">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h3>CHAPITRE</h3>
        </div>
        <div className="chapterList">
          <ol>
            <li>Le Survivant</li>
            <li>Une Vitre Disparaît</li>
            <li>Les Lettres de Nulle Part</li>
            <li>Le Gardien des Clés</li>
            <li>Le Chemin de Traverse</li>
            <li>Rendez – Vous sur la Voie 9 3/4</li>
            <li>Le Choixpeau Magique</li>
            <li>Le Maître des Potions</li>
            <li>Duel à Minuit</li>
            <li>Halloween</li>
            <li>Le Match de Quidditch</li>
            <li>Le Miroir de Riséd</li>
            <li>Nicolas Flamel</li>
            <li>Norbert le Dragon</li>
            <li>La Forêt Interdite</li>
            <li>Sous la Trappe</li>
            <li>L’ Homme aux Deux Visages</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
Chapter.propTypes = {
  closeModal: PropTypes.func.isRequired,
}
