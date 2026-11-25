let count = 0;
const p = document.createElement("p");
p.textContent = `Count: ${count}`;

const button = document.createElement("button");
button.textContent = "Increment";

const root = document.getElementById("root");
root.append(p, button);

button.addEventListener("click", () => {
  count++;
  //to show in the display we have to change the para
  p.textContent = `Count: ${count}`;
  console.log(count);
});
