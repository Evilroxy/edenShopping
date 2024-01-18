let response = await fetch("https://dummyjson.com/products");
let responseAsJson = await response.json();
const products = responseAsJson.products;

console.log(products);

function articles(products) {
  for (let prod = 0; prod <= products.length, prod++; ) {
    price.textContent = products.price;
    placeholder.setAttribute("src", products.images);
    let currency = "€";
    heading2.textContent = products.title;
  }
}

const app = document.querySelector("#app");
let body = document.body;
let article = document.createElement("Article");
let price = document.createElement("p");
let heading2 = document.createElement("h2");
let placeholder = document.createElement("img");
body.appendChild(article);
article.appendChild(heading2);
article.appendChild(placeholder);
article.appendChild(price);
