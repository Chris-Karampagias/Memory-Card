/* eslint-disable react/prop-types */
import "../styles/deck.css";

export default function Deck({ images, markClicked }) {
  return (
    <>
      {images.length === 0 && <div className="loading">Loading...</div>}
      {images.length > 0 && (
        <div className="deck">
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
      )}
    </>
  );
}
