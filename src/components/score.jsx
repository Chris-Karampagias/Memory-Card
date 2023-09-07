/* eslint-disable react/prop-types */

export default function Score({ images, imageIds }) {
  const count = imageIds.length;
  return <>{images.length > 0 && <div className="score">{count} / 10</div>}</>;
}
