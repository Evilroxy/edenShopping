let response = await fetch("https://dummyjson.com/products");
let responseAsJson = await response.json();
const products = responseAsJson.products;
let imag;
let popUp;

function articles(p) {
  for (let prod = 0; prod < products.length; prod++) {
    let currency = "€";
    let price = document.createElement("p");
    price.textContent = products[prod].price + currency;
    imag = document.createElement("img");
    imag.setAttribute("src", products[prod].images[0]);
    imag.setAttribute("class", "prev");
    let heading2 = document.createElement("h2");
    heading2.textContent = products[prod].title;
    let article = document.createElement("article");
    article.appendChild(heading2);
    article.appendChild(imag);
    article.appendChild(price);
    document.querySelector("#app").appendChild(article);
  }

  popUp = document.querySelector(".popUp");
  const images = document.querySelectorAll(".prev");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", () => {
      popUp.innerHTML = "<button>X</button>";
      console.log(products[i]);
      for (let newImg = 0; newImg < products[i].images.length; newImg++) {
        let popUpImg = document.createElement("img");
        popUpImg.setAttribute("src", products[i].images[newImg]);
        popUp.appendChild(popUpImg);
        popUp.style.display = "flex";
      }
      let button = document.querySelector("button");

      button.addEventListener("click", () => {
        popUp.style.display = "none";
      });
    });
  }
}
articles(products);
