import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';

import TicTacToeGame from "./tictactoegame";
  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(<TicTacToeGame />);
  