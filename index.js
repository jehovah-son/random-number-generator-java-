const MyButton = document.getElementById("myButton");
const MyLabel1 = document.getElementById("myLabel1");
const MyLabel2 = document.getElementById("myLabel2");
const MyLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 10;

let RandomNumber1;
let RandomNumber2;
let RandomNumber3;

MyButton.onclick = function () {
  RandomNumber1 = Math.floor(Math.random() * max) + min;
  RandomNumber2 = Math.floor(Math.random() * max) + min;
  RandomNumber3 = Math.floor(Math.random() * max) + min;
  MyLabel1.textContent = RandomNumber1;
  MyLabel2.textContent = RandomNumber2;
  MyLabel3.textContent = RandomNumber3;
  console.log(RandomNumber1, RandomNumber2, RandomNumber3);
};
