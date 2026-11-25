import { useState } from "react";

export default function App() {
  /*function incrementCount() {
    count += 1;
    console.log(count);
    //in react we should avoid this direct dom manipulation because it renders the whole page
    // it is possible that this incrementCount function is used at many places that is why we use hooks
    document.getElementById("para").textContent = `Count :${count}`;
  }*/

  let [count, setCount] = useState(0);

  function incrementCount() {
    count++;
    setCount(count); //this gives a signal to react to change the count value

    //if we take const [count, setCount]= useState(0) we will write it like this setCount(count+1);
  }

  return (
    <div>
      <p id="para">Count :{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
