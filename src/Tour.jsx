import { useState } from "react";

const Tour = ({ id, image, name, info, price, deleteTour }) => {
  const [showText, setShowText] = useState(false);
  // length of the text shown
  const shortInfo = info.slice(0, 250);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <h3 className="tour-price">Price: {price}$</h3>
      <h2>{name}</h2>
      <p>
        {showText ? info : `${shortInfo}...`}
        <button onClick={() => setShowText(!showText)} className="show-txt">
          {showText ? "show less" : "read more"}
        </button>
      </p>
      <button
        className="cancel-btn"
        type="button"
        onClick={() => deleteTour(id)}
      >
        Not Interested
      </button>
    </article>
  );
};
export default Tour;
