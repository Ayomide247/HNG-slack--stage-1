import { createContext, useContext, useState } from "react";
import { GameColors } from "../utils/data";

const ColorSelectionContext = createContext();

export const ColorSelectionProvider = ({ children }) => {
  const [targetColor, setTargetColor] = useState(
    GameColors[Math.floor(Math.random() * GameColors.length)]
  );
  const [score, setScore] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [isCorrect, setIscorrect] = useState(null);
  const [selectedColor, setSelectedColor] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [animateKey, setAnimateKey] = useState(0);

  return (
    <ColorSelectionContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        modalIsOpen,
        setModalIsOpen,
        score,
        setScore,
        guessCount,
        setGuessCount,
        targetColor,
        setTargetColor,
        isCorrect,
        setIscorrect,
        animateKey,
        setAnimateKey,
      }}
    >
      {children}
    </ColorSelectionContext.Provider>
  );
};

export const useColorSelection = () => useContext(ColorSelectionContext);
