let response = await fetch("https://dummyjson.com/products");
let responseAsJson = await response.json();
const products = responseAsJson.products;
let placeholder;

function articles(p) {
  for (let prod = 0; prod < products.length; prod++) {
    let price = document.createElement("p");
    price.textContent = products[prod].price;
    placeholder = document.createElement("img");
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


function plusDimg() {
  placeholder.addEventListener('click', console.log("test"));
  let length = products.images

  for (let img = 0; img < length; img++) {
  let popUp = document.createElement('div');
  popUp.textContent = products[img].images;
  div.appendChild(placeholder)

  }
}