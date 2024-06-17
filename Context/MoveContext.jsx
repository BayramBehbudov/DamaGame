import React, { createContext, useContext, useEffect, useState } from "react";
import { ClickContext } from "./ClickedContext";
import { DamaContext } from "./DamaContext";

const MoveContext = createContext();

const MoveContextProvider = ({ children }) => {
  const [secondFigure, setSecondFigure] = useState(null);
  const { firstClick, setSecond } = useContext(ClickContext);
  const { AllDamaes, setRedWins, setwhiteWins, setWinDama } =
    useContext(DamaContext);

  useEffect(() => {
    if (!secondFigure) return;

    if (firstClick.figure === "r" && secondFigure.figure === "empty") {
      // əgər qarşıya keçmək istəyirsə
      if (
        secondFigure.top === firstClick.top + 1 &&
        (secondFigure.left === firstClick.left + 1 ||
          secondFigure.left === firstClick.left - 1)
      ) {
        setSecond(secondFigure);
      }

      // əgər irəli udmaq istəyirsə
      if (
        AllDamaes[firstClick.top + 1] &&
        AllDamaes[firstClick.top + 1][firstClick.left + 1]?.figure === "w" &&
        secondFigure.left === firstClick.left + 2 &&
        secondFigure.top === firstClick.top + 2
      ) {
        setWinDama(firstClick.top + 1, firstClick.left + 1);
        setSecond(secondFigure);
        setRedWins((prev) => prev + 1);
      }

      if (
        AllDamaes[firstClick.top + 1] &&
        AllDamaes[firstClick.top + 1][firstClick.left - 1]?.figure === "w" &&
        secondFigure.left === firstClick.left - 2 &&
        secondFigure.top === firstClick.top + 2
      ) {
        setWinDama(firstClick.top + 1, firstClick.left - 1);
        setSecond(secondFigure);
        setRedWins((prev) => prev + 1);
      }

      // əgər geri udmaq istəyirsə
      if (
        AllDamaes[firstClick.top - 1] &&
        AllDamaes[firstClick.top - 1][firstClick.left + 1]?.figure === "w" &&
        secondFigure.left === firstClick.left + 2 &&
        secondFigure.top === firstClick.top - 2
      ) {
        setWinDama(firstClick.top - 1, firstClick.left + 1);
        setSecond(secondFigure);
        setRedWins((prev) => prev + 1);
      }

      if (
        AllDamaes[firstClick.top - 1] &&
        AllDamaes[firstClick.top - 1][firstClick.left - 1]?.figure === "w" &&
        secondFigure.left === firstClick.left - 2 &&
        secondFigure.top === firstClick.top - 2
      ) {
        setWinDama(firstClick.top - 1, firstClick.left - 1);
        setSecond(secondFigure);
        setRedWins((prev) => prev + 1);
      }
    }

    if (firstClick.figure === "w" && secondFigure.figure === "empty") {
      // əgər qarşıya keçmək istəyirsə
      if (
        secondFigure.top === firstClick.top - 1 &&
        (secondFigure.left === firstClick.left - 1 ||
          secondFigure.left === firstClick.left + 1)
      ) {
        setSecond(secondFigure);
      }

      // əgər irəli udmaq istəyirsə
      if (
        AllDamaes[firstClick.top - 1] &&
        AllDamaes[firstClick.top - 1][firstClick.left - 1]?.figure === "r" &&
        secondFigure.left === firstClick.left - 2 &&
        secondFigure.top === firstClick.top - 2
      ) {
        setWinDama(firstClick.top - 1, firstClick.left - 1);
        setSecond(secondFigure);
        setwhiteWins((prev) => prev + 1);
      }

      if (
        AllDamaes[firstClick.top - 1] &&
        AllDamaes[firstClick.top - 1][firstClick.left + 1]?.figure === "r" &&
        secondFigure.left === firstClick.left + 2 &&
        secondFigure.top === firstClick.top - 2
      ) {
        setWinDama(firstClick.top - 1, firstClick.left + 1);
        setSecond(secondFigure);
        setwhiteWins((prev) => prev + 1);
      }

      // əgər geri udmaq istəyirsə
      if (
        AllDamaes[firstClick.top + 1] &&
        AllDamaes[firstClick.top + 1][firstClick.left - 1]?.figure === "r" &&
        secondFigure.left === firstClick.left - 2 &&
        secondFigure.top === firstClick.top + 2
      ) {
        setWinDama(firstClick.top + 1, firstClick.left - 1);
        setSecond(secondFigure);
        setwhiteWins((prev) => prev + 1);
      }

      if (
        AllDamaes[firstClick.top + 1] &&
        AllDamaes[firstClick.top + 1][firstClick.left + 1]?.figure === "r" &&
        secondFigure.left === firstClick.left + 2 &&
        secondFigure.top === firstClick.top + 2
      ) {
        setWinDama(firstClick.top + 1, firstClick.left + 1);
        setSecond(secondFigure);
        setwhiteWins((prev) => prev + 1);
      }
    }
  }, [secondFigure]);

  return (
    <MoveContext.Provider value={{ setSecondFigure }}>
      {children}
    </MoveContext.Provider>
  );
};

export { MoveContextProvider, MoveContext };
