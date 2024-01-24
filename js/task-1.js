const itemsOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsOfCategories.length}`);

itemsOfCategories.forEach((item) => {
  const firstElement = item.firstElementChild;
  console.log(`Category: ${firstElement.textContent}`);
  const elementsOfOneCategory = item.querySelectorAll("li");
  console.log(`Elements: ${elementsOfOneCategory.length}`);
});
