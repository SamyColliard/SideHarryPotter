import React, { useState } from "react"
import Deluminateur from "../assets/Deluminateur.svg"
import Cachet from "../assets/Cachet.svg"
import Signature from "../assets/Signature.svg"
import Bourse from "../assets/Bourse.svg"

export default function ModalObjet({ closeModal }) {
  const [isImageOpen, setIsImageOpen] = useState(false)

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  const handleImageClick = () => {
    setIsImageOpen(true)
  }

  const handleCloseImage = (event) => {
    event.stopPropagation()
    setIsImageOpen(false)
  }

  const handleCloseClick = (event) => {
    closeModal(false)
  }

  return (
    <div className="backgroundModalObjet">
      <div className="modalObjet" onClick={handleContentClick}>
        <div className="modalObjetHeader">
          <img
            className="objetImage"
            src={Deluminateur}
            onClick={handleImageClick}
          />
          <h3 className="objetTitre">Objet</h3>
          <img
            src={Bourse}
            className="closeModalObjet"
            onClick={handleCloseClick}
          />
        </div>
        <div className="modalObjetBody">
          <p className="objetDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem voluptatibus
            quos dolorum quae voluptas quas. Quisquam voluptatum, quibusdam,
            quia, quod voluptate voluptatem voluptatibus quos dolorum quae
            voluptas quas.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam voluptatum, quibusdam, quia, quod voluptate
            voluptatem voluptatibus quos dolorum quae voluptas quas. Quisquam
            voluptatum, quibusdam, quia, quod voluptate voluptatem voluptatibus
          </p>
        </div>
        <div className="modalObjetFooter">
          <img className="tamponImage" src={Cachet} />
          <img className="signatureImage" src={Signature} />
        </div>
      </div>
      {isImageOpen && (
        <div className="imageOverlay" onClick={handleCloseImage}>
          <img
            className="expandedImage"
            src={Deluminateur}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
