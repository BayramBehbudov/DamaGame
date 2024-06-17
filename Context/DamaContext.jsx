import React, { createContext, useEffect, useState } from "react";
import Figures from "./component/Figures.js";

const DamaContext = createContext();

const DamaContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState({});
  const [AllDamaes, setAllDamaes] = useState(Figures);
  const [redWins, setRedWins] = useState(0);
  const [whiteWins, setwhiteWins] = useState(0);

  function setWinDama(top, left) {
    setAllDamaes((prevState) => {
      const newState = [...prevState];
      newState[top][left].figure = "empty";
      return newState;
    });
  }
  useEffect(() => {
    if (clicks.secondClick) {
      const {
        firstClick: {
          figure: currentFigure,
          top: currentTop,
          left: currentLeft,
        },
        secondClick: { top: newTop, left: newLeft },
      } = clicks;

      setAllDamaes((prevState) => {
        const newState = [...prevState];
        newState[currentTop][currentLeft].figure = "empty";
        newState[newTop][newLeft].figure = currentFigure;
        return newState;
      });
    }
  }, [clicks]);

  return (
    <DamaContext.Provider
      value={{
        setClicks,
        AllDamaes,
        redWins,
        whiteWins,
        setRedWins,
        setwhiteWins,
        setWinDama,
      }}
    >
      {children}
    </DamaContext.Provider>
  );
};

export { DamaContextProvider, DamaContext };
