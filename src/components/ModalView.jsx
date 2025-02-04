import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useColorSelection } from "./GameContext";
import { GameColors } from "../utils/data";
import { motion } from "framer-motion";

Modal.setAppElement("#root");
useColorSelection;
const ModalView = () => {
  const {
    modalIsOpen,
    setModalIsOpen,
    score,
    // setScore,
    // setIscorrect,
    // setSelectedColor,
    // setTargetColor,
    // setGuessCount,
  } = useColorSelection();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      data-testid="modalContainer"
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Score Modal"
        className="flex flex-col items-center bg-slate-50/80 mt-10 pb-10 px-6 rounded-lg shadow-lg w-[250px] mx-auto"
        overlayClassName="fixed inset-0 bg-slate-300/70 flex items-center justify-center"
        data-testid="scoreModal"
      >
        {score >= 5 ? (
          <p className="text-[60px]" data-testid="emoji">
            🥳
          </p>
        ) : score >= 2 ? (
          <p className="text-[60px]" data-testid="emoji">
            🙁
          </p>
        ) : (
          <p className="text-[60px]" data-testid="emoji">
            😒
          </p>
        )}
        <h2 className="text-xl font-bold mb-4" data-testid="scoreHeader">
          You Scored:
        </h2>
        <p
          className="text-gray-600 mb-4 font-bold text-[100px]"
          data-testid="scoreValue"
        >
          {score}
        </p>

        <button
          onClick={() => {
            // setScore(0);
            // setIscorrect(null);
            // setTargetColor(
            //   GameColors[Math.floor(Math.random() * GameColors.length)]
            // );

            // setGuessCount(0);
            setModalIsOpen(false);
            window.location.reload();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
          data-testid="rematchButton"
        >
          Rematch
        </button>
      </Modal>
    </div>
  );
};

export default ModalView;
