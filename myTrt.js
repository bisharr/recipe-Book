"use strict";
const ulList = document.querySelector("#recipe-list");
console.log(ulList);

const API_KEY = "841a3cd36e94468d9b430d3f724e903b";

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );

  const data = await response.json();
  console.log(data);
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);

  const ingredients = recipes[0].extendedIngredients
    .map((value) => value.original)
    .join(", ");

  const html = `
   <li class="recipe-item">
          <img
            src="${recipes[0].image}"
            alt="recipe 1"
          />
          <h2>${recipes[0].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[0].extendedIngredients[0].original} , ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[0].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[1].image}"
            alt="recipe 1"
          />
          <h2>${recipes[1].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[1].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[1].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[2].image}"
            alt="recipe 1"
          />
          <h2>${recipes[2].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[2].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[1].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[3].image}"
            alt="recipe 1"
          />
          <h2>${recipes[3].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[3].extendedIngredients[1].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[3].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[4].image}"
            alt="recipe 1"
          />
          <h2>${recipes[4].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[4].extendedIngredients[1].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[4].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[5].image}"
            alt="recipe 1"
          />
          <h2>${recipes[5].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[5].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[5].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[6].image}"
            alt="recipe 1"
          />
          <h2>${recipes[6].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[6].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[6].sourceUrl}">View Recipe</a>
        </li>
        
        <li class="recipe-item">
          <img
            src="${recipes[7].image}"
            alt="recipe 1"
          />
          <h2>${recipes[7].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[7].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[7].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[8].image}"
            alt="recipe 1"
          />
          <h2>${recipes[8].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[8].extendedIngredients[1].original},  ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[8].sourceUrl}">View Recipe</a>
        </li>
        <li class="recipe-item">
          <img
            src="${recipes[9].image}"
            alt="recipe 1"
          />
          <h2>${recipes[9].title}</h2>
          <p>
            <strong>Ingredient:</strong>
            ${recipes[9].extendedIngredients[0].original}, ${recipes[9].extendedIngredients[1].original}
          </p>
          <a href="${recipes[9].sourceUrl}">View Recipe</a>
        </li>`;
  ulList.insertAdjacentHTML("afterend", html);
}
init();
