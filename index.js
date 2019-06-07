const formal = document.querySelector("#formal");
const spring = document.querySelector("#spring");
const artdeco = document.querySelector("#artdeco");

const card = document.querySelector("#card");

formal.addEventListener("click", function(){
  card.className = "formal";
});

spring.addEventListener("click", function (){
  card.className = "spring";
});

artdeco.addEventListener("click", function (){
  card.className = "artdeco";
});

const button = document.querySelector("button");
const firstInput = document.querySelector("#name-1");
const secondInput = document.querySelector("#name-2");
const thirdInput = document.querySelector("#LastName");
const fourthInput = document.querySelector("#Date");
const fifthInput = document.querySelector("#WeddingLocation");

const initials = document.querySelector("#initials");
const invite = document.querySelector("#invite");
const firstNames = document.querySelector("#first-names");
const lastName = document.querySelector("#last-name");
const date = document.querySelector("#card-date");
const cardlocation = document.querySelector("#card-location");

button.addEventListener("click", function(event){
  event.preventDefault();
  initials.innerText = firstInput.value[0] + " & " + secondInput.value[0];
 firstNames.innerText = firstInput.value + " & " + secondInput.value;
 lastName.innerText = thirdInput.value;
 date.innerText = fourthInput.value;
 cardlocation.innerText = fifthInput.value;
 invite.innerText = "You are cordially invited to the wedding of";
});