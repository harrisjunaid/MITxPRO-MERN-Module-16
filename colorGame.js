const Square = ({id, player, setPlayer}) => {
  // const [color, setColor] = React.useState(2);
  const [color, setColor] = React.useState('green');

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random()*3)];
  React.useEffect(()=>{
    console.log(`Rerender ${id}`);
    return () => console.log(`unmounting Square ${id}`);
  });

  return (
    // change color of Square on click
    <button onClick={(e) => {
      alert(`I'm Square ${id}`)
      setPlayer((player+1)%2)
      e.target.style.backgroundColor=palet[Math.floor(Math.random()*3)]
    }}>
      <h1>{id}</h1>
    </button>
  )
}
const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);

  let status = `Player ${player}`;
  const reRender = () => setRandom(Math.random())
  const toggle = () => setMounted(!mounted);
  function renderSquare(i) {
    // console.log(`Square ${i} rendered`);
    return <Square id={i} player={player} setPlayer={setPlayer}></Square>;
  }
  return (
    <div className="game-board">
      <div className="grid-row">        
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>Re-render</button>
        <h1>Turn of player {player}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));





