```
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  async function fetchUserData() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    // console.log(data);
    //i want to display this data how to do this which state is used to change and update value
    //useState hook
    console.log("hello");
    setUsers(data);
  }
  fetchUserData();
  return (
    <>
      {users.map((user) => (
        <img src={user.avatar_url} height={"100px"} width={"100px"} />
      ))}
      <h1>GitHub Users</h1>
    </>
  );
}

```

===this code is not correct. How this code runs? The app function is called = Create a state variable called users = we run the fetch api function but it is an async function that is why it does not run at first place = the code flow went to the return section and it wants to return the user data but the user data is not present at the first place that is why it can't return any data but when to fetchapi function returns some data the app function re-renders and it re-renders whenever the fetchapi function is returning something that means many time

### The solution ?

use useeffect hook and make the dependency array empty so that it only runs one time when the app function renderes first time

### One more area to use useEffect

import { useState } from "react";

export default function Clock() {
const [time, setTime] = useState(new Date().toLocaleTimeString());
setInterval(() => {
setTime(new Date().toLocaleTimeString());
console.log("Hello");
}, 1000);
return (
<>

<h1>Time is: {time}</h1>
</>
);
}

This code has a lot of issue why?
The setInterval is maintained by js web api's. what happens in this code is the react will send a setInterval function to the web api every second and the number of setinterval will pile up and when the function is done executing it will return all setinterval at once causing a huge number of re-renders
the solution is to use useEffect.

useEffect(() => {
setInterval(() => {
setTime(new Date().toLocaleTimeString());
console.log("Hello");
}, 1000);
}, []);

### Now i want to show/hide the time how to do this??
