// const categories = document.querySelectorAll("ul#categories li.item");
// console.log(`Number of categories: ${categories.length}`);

const categories = document.querySelector("ul#categories");
console.log(`Number of categories: ${categories.children.length}`);
const categoriesItems = categories.querySelectorAll("li.item");

categoriesItems.forEach(function (category) {
  const titleText = category.querySelector("h2");
  console.log(`Category: ${titleText.textContent}`);

  const elements = category.querySelectorAll("ul li");
  console.log(`Elements: ${elements.length}`);
});