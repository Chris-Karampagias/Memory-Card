/* eslint-disable react/prop-types */
import "../styles/message.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Message({ outcome, handleRestart }) {
  const [isIn, setIsIn] = useState(false);
  return (
    <>
      <CSSTransition in={isIn} timeout={1000} classNames="reveal">
        <div className="message-container">
          <h1>
            You <span className="outcome">{outcome}</span>!
          </h1>
          <button
            className="restart"
            onClick={() => {
              handleRestart();
              setIsIn(true);
            }}
          >
            Restart
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
