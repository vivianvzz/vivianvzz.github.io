
//First Task
//add a function that is able to change a CSS property 
//(change border from 3px solid dodgerblue to hidden)
let button = document.querySelector('.click');
let content1 = document.querySelector('.partA');
let content2 = document.querySelector('.partB');
let content3 = document.querySelector('.partC');
let content4 = document.querySelector('.partD');
console.log(content1);
function changeBorder() {
    content1.style.border = "hidden"; 
    content2.style.border = "hidden"; 
    content3.style.border = "hidden"; 
    content4.style.border = "hidden"; 
}

function changeOpacity() {
  button.style.opacity = '0.3';
}

function resetOpacity() {
  button.style.opacity = '1';
}

button.addEventListener('click', changeBorder);
button.addEventListener('pointerover', changeOpacity);
button.addEventListener('pointerout', resetOpacity);


//Second Task
//add a function that is able to change a CSS property (change background-color)
let background = document.querySelector('body');

let hour = new Date().getHours(); // get current hour
console.log(hour); // display current hour in the web console

function changeBackgroundColor() {
  if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
    background.style.backgroundColor = 'floralwhite'; //means if night, background should be deep blue
  }
  else {
    background.style.backgroundColor = 'aliceblue'; //means if day, background should be light blue
  }
}

//call the function changeBackgroundColor(), which we has defined above
changeBackgroundColor();