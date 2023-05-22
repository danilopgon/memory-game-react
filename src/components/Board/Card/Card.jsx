import { useState } from "react";

const Card = ({ emoji }) => {
  const [show, setShow] = useState(false);

  const flipCard = () => {
    setShow(!show);
  };

  return (
    <div className={`card ${show ? "active" : "back"}`} onClick={flipCard}>
      {emoji}
    </div>
  );
};

export default Card;
