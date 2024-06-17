import React, { useContext, useEffect, useState } from "react";
import style from "./damaPcs.module.css";
import { ClickContext } from "../../Context/ClickedContext.jsx";
import { MoveContext } from "../../Context/MoveContext.jsx";

const borderWidht = 29;
const borderTop = 29;
const itemSize = 55.46;

const DamaPcs = ({ figureData }) => {
  const { figure, top, left } = figureData;
  const [selected, setSelected] = useState(false);

  const { firstClick, setFirst } = useContext(ClickContext);
  const { setSecondFigure } = useContext(MoveContext);

  useEffect(() => {
    if (firstClick) {
      if (
        firstClick.top == figureData.top &&
        firstClick.left == figureData.left
      ) {
        setSelected(!selected);
      }
    }
  }, [firstClick]);

  function move() {
    if (!firstClick && figureData.figure != "empty") {
      setFirst(figureData);
    } else if (firstClick == figureData) {
      setSelected(false);
      setFirst(false);
    } else {
      setSecondFigure(figureData);
      setSelected(false);
    }
  }

  return (
    <div
      className={`${style.item} ${
        selected && figureData.figure != "empty" ? style.selected : ""
      }`}
      style={{
        top: borderTop + itemSize * top,
        left: borderWidht + itemSize * left,
        cursor: "pointer",
      }}
      onClick={move}
    >
      {figure == "r" && <img src="../../img/red.svg" alt="red" />}
      {figure == "w" && <img src="../../img/white.svg" alt="white" />}
    </div>
  );
};

export default DamaPcs;


