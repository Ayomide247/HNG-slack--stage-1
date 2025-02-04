import { useEffect, useState } from "react";
import { fadeIn, GameColors } from "../utils/data";
import React from "react";
import { motion } from "framer-motion";
import { useColorSelection } from "../components/GameContext";
import { TbArrowBigDownLines } from "react-icons/tb";

const HomePage = () => {
  const [] = useState(0);
  const {
    score,
    setScore,
    isCorrect,
    guessCount,
    animateKey,
    modalIsOpen,
    targetColor,
    setIscorrect,
    setGuessCount,
    setAnimateKey,
    selectedColor,
    setTargetColor,
    setModalIsOpen,
    setSelectedColor,
  } = useColorSelection();

  const handleSelectedColor = (colored) => {
    setSelectedColor(colored);

    if (guessCount >= GameColors.length) return;

    let totalScore = score + 1;
    if (colored.id === targetColor.id) {
      setIscorrect(true);
      setScore(totalScore);
    } else {
      setIscorrect(false);
    }

    setGuessCount(guessCount + 1);

    setTimeout(() => {
      setTargetColor(GameColors[Math.floor(Math.random() * GameColors.length)]);
    }, 500);
  };

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [modalIsOpen]);

  useEffect(() => {
    isCorrect ? setIscorrect(targetColor?.id === selectedColor?.id) : isCorrect;

    if (guessCount >= GameColors.length) {
      setModalIsOpen(true);
    }
  }, [selectedColor, guessCount]);

  console.log(guessCount);

  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <div className="flex flex-col items-center justify-center lg:h-fit bg-slate-100 p-10 lg:w-fit w-full h-screen shadow-md rounded-lg">
        <div>
          <h1
            className="text-[30px] font-bold mb-4"
            data-testid="gameInstructions"
          >
            <span className="text-blue-400">HNG</span> Color Guessing Game
          </h1>
        </div>
        <p
          data-testid="gameStatus"
          className="mb-4 text-lg font-semibold text-gray-800 h-[70px]"
        >
          {isCorrect === null ? (
            <div className="flex flex-col items-center gap-8">
              <p data-testid="gameInstructions">Guess the correct color!</p>
              <TbArrowBigDownLines className="animate-bounce" />
            </div>
          ) : isCorrect ? (
            <p data-testid={"gameStatus"}>Correct! 🎉</p>
          ) : (
            <p data-testid={"gameStatus"}>Wrong answer ❌</p>
          )}
        </p>

        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 50 }}
          data-testid="colorBox"
          className="w-[220px] h-32 rounded-lg mb-6 shadow-md scale-105"
          style={{ backgroundColor: targetColor?.color_code || "transparent" }}
        ></motion.div>

        <motion.div
          key={animateKey}
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="grid grid-cols-3 gap-4 mb-6"
        >
          {GameColors.map((colored, index) => (
            <button
              onClick={() => handleSelectedColor(colored)}
              key={index}
              data-testid="colorOption"
              className="w-16 h-16 rounded-lg shadow-md"
              style={{ backgroundColor: colored?.color_code }}
              disabled={guessCount >= GameColors.length}
            ></button>
          ))}
        </motion.div>

        <p data-testid="score" className="mb-6 text-lg font-bold text-gray-900">
          Score: {score}
        </p>

        <button
          data-testid="newGameButton"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 font-semibold"
          onClick={() => {
            setScore(0);
            setGuessCount(0);
            setTargetColor(
              GameColors[Math.floor(Math.random() * GameColors.length)]
            );
            setIscorrect(null);
            setModalIsOpen(false);
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
};

export default HomePage;
