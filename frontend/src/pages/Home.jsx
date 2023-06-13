import React, { useState, useEffect } from "react"
import { ReactFlashlight } from "react-flashlight"
import TwinklingStars from "../components/TwinklingStars"
import Titre from "../components/Titre"
import Livres from "../components/Livres"
import Connect from "../components/Connect"
import Hogwarts from "../assets/Hogwarts.png"
import Lumos from "../assets/Deluminateur.svg"
import ModalObjet from "../components/ModalObjet"

export default function Home() {
  const [enabled, setEnabled] = useState(true)
  const [zIndexEnabled, setZIndexEnabled] = useState(true)
  const [isModalObjetOpen, setModalObjetOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [size, setSize] = useState(90)
  const [isAnimationComplete, setAnimationComplete] = useState(false)

  const toggleEnabled = () => {
    setEnabled(!enabled)
    toggleZIndex()
  }

  const toggleZIndex = () => {
    setZIndexEnabled(!zIndexEnabled)
  }

  const closeModal = () => {
    setModalObjetOpen(false)
    setShowMessage(true)
  }

  const handleModalObjetClick = () => {
    setModalObjetOpen(true)
    setAnimationComplete(false)
    setSize(90)
  }

  useEffect(() => {
    let timeoutId

    if (showMessage) {
      timeoutId = setTimeout(() => {
        setShowMessage(false)
      }, 2500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [showMessage])

  useEffect(() => {
    if (isModalObjetOpen && !isAnimationComplete) {
      const intervalId = setInterval(() => {
        setSize((prevSize) => {
          if (prevSize < 4000) {
            return prevSize + 100
          } else {
            clearInterval(intervalId)
            setAnimationComplete(true)
            return prevSize
          }
        })
      }, 80)
    }
  }, [isModalObjetOpen, isAnimationComplete])

  useEffect(() => {
    if (isAnimationComplete) {
      toggleEnabled()
    }
  }, [isAnimationComplete])

  return (
    <>
      <ReactFlashlight
        enabled={enabled}
        darkness={1}
        showCursor={true}
        size={size}
        speed={1}
        style={{ zIndex: 5 }}
      >
        <div className="pageHome">
          <div className="backgroundHome">
            <TwinklingStars />
          </div>
          <div className="headerHome">
            <Connect />
          </div>
          <div className="contentHome">
            <Titre />
            <button
              className={`buttonHome ${zIndexEnabled ? "" : "buttonHomeOff"}`}
              onClick={handleModalObjetClick}
            >
              <img src={Lumos} className="imageButton" />
            </button>
            {isModalObjetOpen && (
              <div className="divModalObjet">
                <ModalObjet closeModal={closeModal} />
              </div>
            )}
            {showMessage && (
              <div className="message">
                L'objet a ete ajoute à votre inventaire
              </div>
            )}
            <div
              className={`imageContainer ${
                zIndexEnabled ? "imageContainer--enabled" : ""
              }`}
            >
              <img className="banniere" src={Hogwarts} alt="Hogwarts" />
              <p className="resume">
                L'histoire, se situant dans les annees 1990, raconte la jeunesse
                de Harry Potter, sorcier orphelin eleve sans affection ni
                consideration par la seule famille vivante qui lui reste : son
                oncle et sa tante moldus (sans pouvoirs magiques). Le garcon
                decouvre son identite de sorcier, son heritage tragique et la
                responsabilite qui lui revient. Harry est considere comme « le
                survivant » depuis que ses parents Lily Evans et James Potter
                ont ete assassines. Le puissant mage noir Lord Voldemort les a
                tues dix ans plus tot alors que Harry, qui n'etait alors qu'un
                bebe, est parvenu a echapper de maniere tres inattendue au
                sortilege de la mort. La tentative de meurtre etait motivee par
                une prophetie annoncant à premiere vue que Harry aneantirait un
                jour les pouvoirs de Voldemort. Cependant, le sortilege lance
                par Voldemort sur l'enfant se retourne inexplicablement contre
                son lanceur et le desintegre, laissant le garçon intact avec
                pour seule trace de cet evenement une cicatrice en forme
                d’eclair sur le front. Le garçon devient par consequent tres
                celebre parmi les sorciers, tandis qu'il demeure ordinaire chez
                les Moldus. Chacun des romans se deroule pendant une annee
                scolaire, tout au long de la jeunesse de Harry. Durant ces sept
                ans, le jeune sorcier, accompagne de ses deux loyaux amis Ron
                Weasley et Hermione Granger, va notamment assister au retour de
                Voldemort et à sa seconde ascension vers le pouvoir.
              </p>
            </div>
            <div className={`livres ${zIndexEnabled ? "livres--enabled" : ""}`}>
              <Livres />
            </div>
          </div>
        </div>
      </ReactFlashlight>
    </>
  )
}
