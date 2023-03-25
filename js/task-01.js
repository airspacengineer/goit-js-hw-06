const categoriesList = document.querySelector("#categories");
const categoriesListChildren = Array.from(categoriesList.children);

console.log(`Number of categories: ${categoriesListChildren.length}`);

categoriesListChildren.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
