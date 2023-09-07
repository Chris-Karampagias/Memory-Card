/* eslint-disable react/prop-types */
import "../styles/deck.css";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";

export default function Deck({ images, markClicked }) {
  const parentRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <>
      <div className="deck" ref={parentRef}>
        {images.map((image, index) => (
          <div
            className="image-container"
            onClick={() => {
              markClicked(image);
            }}
            key={index}
          >
            <img src={image.url} alt="A cat" />
          </div>
        ))}
      </div>
    </>
  );
}
