const Square = ({id, newState}) => {
  /**
   * @desc color palet array
   */
  const palet = ['red', 'blue', 'green']; // color palet
  /**
   * @desc status array
   */ 
  const xo = ["O","X"]; // status

  // const [color, setColor] = React.useState(2); //same as 'green'
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);
  
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  React.useEffect(()=>{
    console.log(`Rerender ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });
  return (
    // change color of Square on click
    <button
     onClick={(e) => {
      let col = getRandomColor();
      setColor(col);
      // alert(`I'm Square ${id}`)
      // e.target.style.backgroundColor = color;
      e.target.style.backgroundColor = col;
      let nextPlayer = newState({id: id, color: col}); // PASSING TO PARENT
      setStatus(nextPlayer);

    }}>
      <h1>{xo[status]}</h1>
    </button>
  )
}
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true); // show-hide components
  const [random, setRandom] = React.useState(0); //re-render
  const [state, setState] = React.useState([]); //record for square clicked
  /**
   * @function 
   * @name toggle
   * @description 
   * control component display 
   * used in switch {mounted && renderSquare(i)}
   * => setMounted(!mounted)
   */
  const toggle = () => setMounted(!mounted); //show/hide components
  /**
   * @function
   * @description
   * called onClick: 
   * - button Re-render (to demonstrate re-rendering of components by useState setter function call)
   * => setRandom(Math.random())
   */
  const reRender = () => setRandom(Math.random()); //re-render
  /**
   * @function
   * @param {object} ob 
   * @desc
   * calls:
   *  - setPlayer(number)
   *  - setState( [...state, obj] )
   */
  const newState = (ob) => {
    let nextPlayer = (player+1)%2; 
    setPlayer(nextPlayer);
    // const status = `Player ${player}`;

    setState([...state, ob]);
    console.log(`adding state ${JSON.stringify(ob)}`)
    console.log(`state array ${JSON.stringify(state)}`)
    return nextPlayer;
  }
  /**
   * 
   * @param {number} i 
   * @returns 
   * 
   */
  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">    
        {/* {renderSquare(0)} {renderSquare(1)} {renderSquare(2)} */}
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      {/* <div id="info"> */}
        {/**show/hide components*/}
        {/* <button onClick={toggle}>Show/Hide Row</button>  */}
        {/**re-render*/}
        {/* <button onClick={reRender}>Re-render</button>  */}
        {/* <h1>Player: {player}</h1> */}
      {/* </div> */}
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));





