const $elementExampleFirst = document.querySelector(".elementExample_first");
const $elementExampleLast = document.querySelector(".elementExample_last");

$elementExampleFirst.addEventListener("click", function (event) {
  this.classList.toggle("elementExample_isActive"); // If the class elementExample_isActive exists he will removes the class, otherwise it will add the class to the element
  $elementExampleLast.classList.add("elementExample_isActive");
});

$elementExampleLast.addEventListener("click", function (event) {
  this.classList.toggle("elementExample_isActive");
  $elementExampleFirst.classList.add("elementExample_isActive");
});


//  Note:

// The objective of this code is: Toggle the element that will be displayed according to the user's click.
// 1. We create two constants that hold the values ​​selected via the css selector, that is, the two elements created.
// 2. addEventListener (adicionamos o ouvinte de um click) 
// 3. Executamos a função, pegamos a propriedade this que é o elemento que estamos clicando e colocamos o classList.toggle que é o responsavel por criar ou remover a classe elementExample_isActive.