/* eslint-disable react/prop-types */
import "../styles/deck.css";
import Image from "./image";

export default function Deck({ images }) {
  return (
    <>
      {images.length === 0 && <div className="loading">Loading...</div>}
      {images.length > 0 && (
        <div className="deck">
          {images.map((image) => (
            <div className="image-container">
              <Image url={image.url} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
