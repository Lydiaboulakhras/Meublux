/*
for (let i = 0; i < icone.length; i++) {
  console.log(icone[i]);
} */

let icone = document.querySelectorAll("i");
for (let i = 0; i < icone.length; i++) {
  icone[i].addEventListener("click", function () {
    cartNumbers();
  });
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("key");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("key", productNumbers + 1);
    document.getElementsByClassName("panier").textContent = productNumbers + 1;
    innerHtml();
  } else {
    localStorage.setItem("key", 1);
    document.getElementsByClassName("panier").textContent = 1;
  }
}
