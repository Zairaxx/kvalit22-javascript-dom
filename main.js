//Uppgift 1
let p = document.createElement("p");
p.innerText = "Hej från Javascript!";
document.body.append(p);

let h1 = document.querySelector("h1");
h1.innerText = "Rubrik från Javascript";

let changeBgBtn = document.querySelector("#change-bg");

changeBgBtn.addEventListener("click", function () {
  document.body.style.background = "peachpuff";
});

let changeColorBtn = document.createElement("button");

changeColorBtn.innerText = "Change color";
changeColorBtn.addEventListener("click", function () {
  h1.style.color = "darkred";
});

document.body.append(changeColorBtn);

//Uppgift 2

let foodList = document.querySelector("#food-list");

let dishes = ["Sushi", "PLANKSTEK", "Adana Kebab", "Pasta", "Injera"];

dishes.forEach(function (dish) {
  let li = document.createElement("li");
  li.innerText = dish;
  foodList.append(li);
  li.style.background = "black";
  li.style.color = "white";
});

//Uppgift 3

let foodObject = {
  dish: "Ananaspizza",
  price: 119,
  rating: "3/5",
  isVegan: true
};

let toggleCardBtn = document.querySelector("#toggle-card");
let foodCard = document.querySelector("#food-card");

toggleCardBtn.addEventListener("click", function () {
  if (foodCard.classList.contains("hidden")) {
    //Ta bort klassen hidden
    foodCard.classList.remove("hidden");
    //Sätter en border
    foodCard.style.border = "2px solid black";

    //Placerar all data som innerHTML i div:en
    foodCard.innerHTML = `<h3>${foodObject.dish}</h3>
  <p>Price: ${foodObject.price}</p>
  <p>Rating: ${foodObject.rating}</p>
  <p>Is vegan: ${foodObject.isVegan}</p>
  `;
  } else {
    foodCard.classList.add("hidden");
  }
});

//Uppgift 4

let numbers = [2, 5, 10, 15, 20, 25, 30, 50, 60, 92];

//Skapa ul
let ul = document.createElement("ul");
document.body.append(ul);

//Skriv ut li-element
numbers.forEach(function (number, index) {
  let li = document.createElement("li");
  li.innerText = number;
  ul.append(li);
  if (index % 5 === 4) {
    li.style.color = "purple";
  } else if (number % 2 === 0) {
    li.style.color = "red";
  } else {
    li.style.color = "blue";
  }
});
