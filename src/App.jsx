import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  
  const handleClick2 = () => alert('clicked 2')

  
  return (
    <>
      <h2>React Core conpects 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me </button>
      <button onClick={handleClick2}>Click Me 2</button>
      <br />
      <button onClick={() => alert("clicked from 3")}>Click me 3</button>
      <button onClick={() => addToFive(3)}>Clicked 4</button>
    </>
  );
}
function handleClick() {
  alert("clicked from handle click");
}

const addToFive = (num) => {
  alert(num + 5);
};


export default App
