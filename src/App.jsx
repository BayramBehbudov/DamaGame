import style from "./App.module.css";
import DamaPcs from "../components/DamaPcs/DamaPcs";
import { DamaContext } from "../Context/DamaContext.jsx";
import { useContext } from "react";
import BoardImg from "../img/board.svg";
function App() {
  const { AllDamaes, redWins, whiteWins } = useContext(DamaContext);

  return (
    <div className={style.container}>
      <div className={style.board}>
        <img src={BoardImg} alt="board" />
        {AllDamaes.map((row) =>
          row.map((dama, index) => (
            <DamaPcs key={"dama" + index} figureData={dama} />
          ))
        )}
        <div className={`${style.redContainer} ${style.pcsContainer}`}>
          {redWins}
        </div>
        <div className={`${style.whiteContainer} ${style.pcsContainer}`}>
          {whiteWins}
        </div>
      </div>
    </div>
  );
}

export default App;
