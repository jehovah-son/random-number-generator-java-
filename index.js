const MyButton = document.getElementById("myButton");
const MyLabel = document.getElementById("myLabel");
const min = 1;
const max = 10;

let RandomNumber;

MyButton.onclick = function (){
    RandomNumber = Math.floor(Math.random() * max)+min;
    MyLabel.textContent = RandomNumber;
    console.log(RandomNumber);
   
}