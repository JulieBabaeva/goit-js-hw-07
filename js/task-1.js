const categories = document.querySelectorAll(".item");
const NumberOfcategories = categories.length;
console.log(`Number of categories: ${NumberOfcategories}`);

//

categories.forEach((item) => {
  const categoriesName = item.querySelector("h2").textContent;
  const numberOfSubcategories = item.querySelectorAll("li").length;
  console.log(`Category: ${categoriesName} `);
  console.log(`Elements: ${numberOfSubcategories} `);
});
