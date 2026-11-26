import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);
  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      // console.log(data);
      //i want to display this data how to do this which state is used to change and update value
      //useState hook
      console.log("hello");
      setUsers(data);
    }
    fetchUserData();
  }, [count]);
  return (
    <>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      {users.map((user) => (
        <img
          src={user.avatar_url}
          height={"100px"}
          width={"100px"}
          key={user.login}
        />
      ))}
      <h1>GitHub Users</h1>
    </>
  );
}
