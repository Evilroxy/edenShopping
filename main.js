const app = document.querySelector('#app');
let body = document.body
let article = document.createElement('Article')
let currency = "€"
let price = document.createElement('p')
price.textContent=  '100' + currency

let heading2 = document.createElement('h2')
heading2.textContent = "Ceinture"

let placeholder = document.createElement("img")
placeholder.setAttribute("src", "/public/image.jpg")

body.appendChild(article)
article.appendChild(heading2)
article.appendChild(placeholder)
article.appendChild(price)





