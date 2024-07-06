console.clear();
console.log("ci siamo");

console.log(localStorage);

const usersForStorage = [
  {
    name: "Alice",
    description: "autistica",
  },
  {
    name: "Marco",
    description: "sta impazzendo",
  },
];

localStorage.setItem("users", JSON.stringify(usersForStorage));
const itemFromStorage = localStorage.getItem("users");

const users = JSON.parse(itemFromStorage) || [];

const body = document.querySelector(".root")
const ul = document.createElement("ul");
const button = document.createElement("button");
button.textContent = "clear"

button.addEventListener("click", () => {
    localStorage.clear();
});

users.forEach(user => {
    const li = document.createElement("li");
    const name = document.createElement("p");
    const description = document.createElement("p");
    name.textContent = user.name;
    description.textContent = user.description;
    
    li.append(name, description);
    ul.appendChild(li);
})

body.append(ul, button);
