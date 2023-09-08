import { useState, useEffect } from "react";
import "../styles/game.css";
import Deck from "./deck";
import Score from "./score";
import Message from "./message";

export default function Game() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("playing");
  const [imageIds, setImageIds] = useState([]);
  const [outcome, setOutcome] = useState("");
  const count = imageIds.length;

  useEffect(() => {
    if (count === 10) {
      setStatus("end");
      setOutcome("won");
    } else if (count < 10 && status === "end") {
      setOutcome("lost");
    }
  }, [count, status]);

  function shuffleImages(images) {
    const newImages = [...images];
    for (let i = newImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newImages[i], newImages[j]] = [newImages[j], newImages[i]];
    }
    setImages(newImages);
  }

  function handleClick(selectedImage) {
    const found = images.find(
      (image) => imageIds.includes(image.id) && selectedImage.id === image.id
    );
    if (found) {
      setStatus("end");
      return;
    }
    const newIds = [...imageIds];
    newIds.push(selectedImage.id);
    setImageIds(newIds);
  }

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
      headers: {
        "x-api-key":
          "live_J0KX6LvakQOaqx1b7EfkXlj9rNG0R26YbdWchh2qwhL7GIPP04YEqFEkg7JbYGHD",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setImages(result);
      });
  }, []);
  return (
    <div className="game-container">
      {status === "playing" && images.length === 0 && (
        <div className="loading">Loading...</div>
      )}
      {status === "playing" && images.length > 0 && (
        <>
          <Score count={count} />
          <Deck
            images={images}
            markClicked={handleClick}
            shuffleImages={shuffleImages}
          />
        </>
      )}
      {status === "end" && <Message outcome={outcome} />}
    </div>
  );
}
