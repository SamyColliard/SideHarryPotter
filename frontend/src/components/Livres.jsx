import React, { useState, useEffect } from "react"
import ResumeLivre from "./ResumeLivre"
import Chapter from "./Chapter"
import Play from "../assets/play.svg"
import Restart from "../assets/Restart.svg"

export default function Livres() {
  const [areButtonsVisible, setButtonsVisibility] = useState(false)
  const [isResumeModalOpen, setResumeModalOpen] = useState(false)
  const [isChaptersModalOpen, setChaptersModalOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleButtonsVisibility = () => {
    setButtonsVisibility(!areButtonsVisible)
  }

  const handleResumeButtonClick = (e) => {
    setResumeModalOpen(true)
    e.stopPropagation()
  }

  const handleChaptersButtonClick = (e) => {
    setChaptersModalOpen(true)
    e.stopPropagation()
  }

  const handlePlayButtonClick = (e) => {
    toggleDropdown()
    e.stopPropagation()
  }

  const closeModal = () => {
    setResumeModalOpen(false)
    setChaptersModalOpen(false)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    if (isResumeModalOpen || isChaptersModalOpen) {
      setTimeout(() => {
        const modal = document.querySelector(".modal")
        if (modal) {
          modal.classList.add("modal-open")
        }
      }, 100)
    }
  }, [isResumeModalOpen, isChaptersModalOpen])

  useEffect(() => {
    if (isDropdownOpen) {
      setTimeout(() => {
        const dropdown = document.querySelector(".dropdown")
        if (dropdown) {
          dropdown.classList.add("dropdown-open")
        }
      }, 100)
    }
  }, [isDropdownOpen])

  return (
    <div className="containerLivres" onClick={toggleButtonsVisibility}>
      <div className="livre1">
        {areButtonsVisible && (
          <div className="blur">
            <button className="allElement" onClick={handleResumeButtonClick}>
              RESUMER
            </button>
            {isResumeModalOpen && (
              <div className="modal">
                <ResumeLivre closeModal={closeModal} />
              </div>
            )}
            <button className="allElement" onClick={handlePlayButtonClick}>
              LECTURE
            </button>

            <div
              className={`dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}
            >
              <button className="dropdown-item1">
                <img className="imagePlay" src={Play} alt="Play" />
                Reprendre
              </button>
              <button className="dropdown-item2">
                <img className="imageRestart" src={Restart} alt="Restart" />{" "}
                Recommencer
              </button>
            </div>

            <button className="allElement" onClick={handleChaptersButtonClick}>
              CHAPITRES
            </button>
            {isChaptersModalOpen && (
              <div className="modal">
                <Chapter closeModal={closeModal} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
