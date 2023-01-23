

const list = document.querySelector("#ingredients");

const heading = document.createElement("h1");
heading.textContent = "Ingredients";
list.prepend(heading);

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
 
];

ingredients.forEach(function (ingredient, index) {
  let item = document.createElement("li");
  item.textContent = index + 1 + " " + ingredient;
  item.classList.add("item");
  console.log(item.classList); 
  list.append(item);
});




// const list = querySelector(".ingredients");

// const heading = document.createElement("h1");

// heading.textContent = "Ingredients";
// heading.after(list);

