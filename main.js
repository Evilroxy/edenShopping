let response = await fetch("https://dummyjson.com/products");
let responseAsJson = await response.json();
const products = responseAsJson.products;

function articles(p) {
  for (let prod = 0; prod < products.length; prod++) {
    let price = document.createElement("p");
    price.textContent = products[prod].price;
    let placeholder = document.createElement("img");
    placeholder.setAttribute("src", products[prod].images[0]);
    let currency = "€";
    let heading2 = document.createElement("h2");
    heading2.textContent = products[prod].title;
    let article = document.createElement("article");
    article.appendChild(heading2);
    article.appendChild(placeholder);
    article.appendChild(price);
    document.querySelector("#app").appendChild(article);
  }
}

articles(products);

// let response = await fetch("https://dummyjson.com/products");
// let responseAsJson = await response.json();
// const products = responseAsJson.products;

// function articles(p) {
//   for (let prod = 0; prod <= products.length, prod++; ) {
//     price.textContent = products.price;
//     placeholder.setAttribute("src", products.images[0]);
//     let currency = "€";
//     heading2.textContent = products.title;
//   }
// }

// const app = document.querySelector("#app");
// let body = document.body;
// let article = document.createElement("Article");
// let price = document.createElement("p");
// let heading2 = document.createElement("h2");
// let placeholder = document.createElement("img");
// body.appendChild(article);
// article.appendChild(heading2);
// article.appendChild(placeholder);
// article.appendChild(price);
