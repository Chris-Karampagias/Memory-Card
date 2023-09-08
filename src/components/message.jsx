/* eslint-disable react/prop-types */
import "../styles/message.css";
import { CSSTransition } from "react-transition-group";

export default function Message({ outcome, handleRestart }) {
  return (
    <>
      <CSSTransition in={true} timeout={1500} classNames="reveal" appear>
        <div className="message-container">
          <h1>
            You <span className="outcome">{outcome}</span>!
          </h1>
          <button
            className="restart"
            onClick={() => {
              handleRestart();
            }}
          >
            Restart
          </button>
        </div>
      </CSSTransition>
    </>
  );
}
