import { useState } from "react";
import HomePage from "./components/HomePage";
import { ColorSelectionProvider } from "./components/GameContext";
import ModalView from "./components/ModalView";

function App() {
  return (
    <>
      <ColorSelectionProvider>
        <HomePage />
        <ModalView />
      </ColorSelectionProvider>
    </>
  );
}

export default App;
