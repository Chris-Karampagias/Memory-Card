import { useState, useEffect } from "react";
import "../styles/game.css";
import Deck from "./deck";
import Score from "./score";
import Message from "./message";

export default function Game() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("playing");
  const [imageIds, setImageIds] = useState([]);

  function handleClick(selectedImage) {
    const found = images.find((image) => imageIds.includes(image.id));
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
      {status === "playing" && (
        <>
          <Score images={images} imageIds={imageIds} />
          <Deck images={images} markClicked={handleClick} />
        </>
      )}
      {status === "end" && <Message />}
    </div>
  );
}
