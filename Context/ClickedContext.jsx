import React, { createContext, useContext, useEffect, useState } from "react";
import { DamaContext } from "./DamaContext.jsx";
const ClickContext = createContext();

const ClickedContext = ({ children }) => {
  const [firstClick, setFirst] = useState(false);
  const [secondClick, setSecond] = useState(false);

  const { setClicks } = useContext(DamaContext);

  useEffect(() => {
    setClicks({ firstClick, secondClick });
    setFirst(false);
    setSecond(false);
  }, [secondClick]);




  return (
    <ClickContext.Provider value={{ firstClick,secondClick, setFirst, setSecond }}>
      {children}
    </ClickContext.Provider>
  );
};

export { ClickedContext, ClickContext };
