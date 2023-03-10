// Checking for Winner takes a bit of work
// We use JavaScript Sets to check players choices
// against winning combinations
// Online there is more compact version but I prefer this one

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkForWinner = (gameState) => {  

  /**
   * INITIAL CHECK:
   * - not enough data
   */
  if (gameState.length <= 4) return "undecided";

  //        AFTER 4th gameState
  /**
   * get player: 0 id's
   */
  let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
  }); // filter "O" gameState
  p0 = p0.map((item) => item.id);  
  ///////////////////////////////////////
  /**
   * get player: 1 id's
   */
  let px = gameState.filter((item) => {
    if (item.player == 1) return item;
  }); // filter "X" gameState
  px = px.map((item) => item.id);
  ///////////////////////////////////////

  /**
   * @typedef {function} Set
   * @description
   * new Set()	Creates a new Set
   * has()	Returns true if a value exists
   * - A JavaScript Set is a collection of unique values.
   * - Each value can only occur once in a Set.
   * - A Set can hold any value of any data type.
   * Docs: https://www.w3schools.com/js/js_object_sets.asp 
   */

  /**
   * calling isSuperSet
   */
  if (p0 != null && px != null) { // both p0 and p1 have values
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }

  if (win0.length > 0) return "Player O ";
  else if (winX.length > 0) return "Player X ";
  return "still undecided";
};

// check if subset is in the set
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) { // enter if set does not have sebset's elements
      return false;       // skipped if set has all the elements in subset
    }
  }
  return true;
}


const Square = ({ takeTurn, id }) => {
  const mark = ["O", "X", "+"];
  // id is the square's number
  // filled tells us if square has been filled
  // tik tells us symbol in square (same as player)
  // We call takeTurn to tell Parent we have filled the square
  const [filled, setFilled] = React.useState(false);
  const [tik, setTik] = React.useState(2);
  React.useEffect(()=>{
    console.log(`Rerender ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });
  return (
    <button
      onClick={() => {
        let player = takeTurn(id);
        setTik(player);
        setFilled(true);
        console.log(`Square: ${id} filled by player : ${player}`);
      }}
    >
      <h1>{mark[tik]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);   // 1st player is X ie 1
  
  // State keeps track of next player and gameState
  const [gameState, setGameState] = React.useState([]);
  // const [gameState, setGameState] = React.useState(Array(9).fill(null));

  console.log("gameState:", gameState);
  // check for winner (see superset.js)
  let status = `Winner is:  ${checkForWinner(gameState)}`;
  console.log(` ${status}`);

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i) {
    // use properties to pass callback function takeTurn to Child
    return <Square id={i} takeTurn={takeTurn}></Square>;
  }

  const [mounted, setMounted] = React.useState(true); // show-hide components
  const toggle = () => setMounted(!mounted); // show/hide components

  const [random, setRandom] = React.useState(0); // re-render
  const reRender = () => setRandom(Math.random()); // re-render

  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(3)}
        {mounted && renderSquare(4)}
        {mounted && renderSquare(5)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(6)}
        {mounted && renderSquare(7)}
        {mounted && renderSquare(8)}
      </div>
      <div id="info">
        {/**show/hide components*/}
        <button onClick={toggle}>Show/Hide Row</button> 
        {/**re-render*/}
        <button onClick={reRender}>Re-render</button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
