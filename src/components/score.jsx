/* eslint-disable react/prop-types */

export default function Score({ imageIds }) {
  const count = imageIds.length;
  return (
    <>
      <div className="score">{count} / 10</div>
    </>
  );
}
