const Board = () => {
  const [player, setPlayer] = React.useState(0);
  // let player = 1;

  let status = `Player ${player}`;
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer(player + 1);
        /**
         * React didn't re-render
         * because we need to keep state in a special way in our component
         */
        // player = player + 1;  
        status = `Player ${player}`;
      }}
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));


