import { useState } from "react";

function App() {
  const [num, setNum] = useState(0)

  const plus = () => {
    if(num < 15)
    setNum(num + 5)
  }

  
  const min = () => {
    if(num > 0)
    setNum(num - 5)
  }

  return (
    <div >
      <h2>{num}</h2>
         <button onClick={plus}>+5</button>
          <button onClick={min}>-5</button> 
    </div>
  );
}

export default App;
