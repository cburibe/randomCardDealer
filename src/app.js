/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateRandomSuitCard = function() {
    let cardSuits = ["diams", "hearts", "clubs", "spades"];
    let indexCardsSuits = Math.floor(Math.random() * cardSuits.length);
    return cardSuits[indexCardsSuits];
  };
  let generateRandomNumberCard = function() {
    let cardNumbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexCardsNumbers = Math.floor(Math.random() * cardNumbers.length);
    return cardNumbers[indexCardsNumbers];
  };
  document.querySelector(".card").className =
    "card " + generateRandomSuitCard();
  document.querySelector(".card").innerHTML = generateRandomNumberCard();

  setInterval(function() {
    document.querySelector(".card").className =
      "card " + generateRandomSuitCard();
    document.querySelector(".card").innerHTML = generateRandomNumberCard();
  }, 10000);
};
