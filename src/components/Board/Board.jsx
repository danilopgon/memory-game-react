import "./board.css";
import Card from "./Card";
import emojis from "../../utils/emojis";

const Board = () => {
  const cardsDeck = [...emojis, ...emojis];
  const shuffledDeck = cardsDeck.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="board">
      <h1 className="title">Let's play a memory game!</h1>
      {shuffledDeck.map((emoji, key) => {
        return <Card key={key} emoji={emoji} />;
      })}
    </div>
  );
};

export default Board;
