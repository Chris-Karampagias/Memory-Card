/* eslint-disable react/prop-types */
import "../styles/deck.css";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { CSSTransition } from "react-transition-group";

export default function Deck({ images, markClicked, shuffleImages }) {
  const [isIn, setIsIn] = useState(false);
  return (
    <>
      <div className="deck">
        {images.map((image, index) => (
          <Tilt perspective={700} key={index}>
            <CSSTransition in={isIn} timeout={1000} classNames="rotate">
              <div
                className="image-container"
                onClick={() => {
                  markClicked(image);
                  setTimeout(() => {
                    shuffleImages(images);
                  }, 500);
                  setIsIn((v) => !v);
                }}
              >
                <img src={image.url} alt="A cat" />
              </div>
            </CSSTransition>
          </Tilt>
        ))}
      </div>
    </>
  );
}
