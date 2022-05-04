

//First Task
//Add a function that is able to change a CSS property 
//(change font-weight from normal to bold)
let key = document.querySelector('.bold');
let content = document.querySelector('.entire');
function changeToBold() {
    content.style.fontWeight = "bolder"; 
}

function changeOpacity() {
  key.style.opacity = '0.3';
}

function resetOpacity() {
  key.style.opacity = '1';
}

key.addEventListener('click', changeToBold);
key.addEventListener('pointerover', changeOpacity);
key.addEventListener('pointerout', resetOpacity);



//Second Task: Change the four images displayed respectively
let key2 = document.querySelector('.c');
let images = document.querySelector('.children');
console.log(images);

// change HTML of the image displayed
function differentImage() {
  images.innerHTML = '<img src="back.png" srcset="back@2x.png 2x" width="150" height="200" alt="First Image"><img src="change1.png" srcset="change1@2x.png 2x" width="150" height="200" alt="Second Image"><img src="change2.png" srcset="change2@2x.png 2x" width="150" height="200" alt="Third Image"><img src="icon.png" srcset="icon@2x.png 2x" width="150" height="200" alt="Fourth Image">';
}

function changeOpacity2() {
  key2.style.opacity = '0.3';
}

function resetOpacity2() {
  key2.style.opacity = '1';
}

key2.addEventListener('click', differentImage);
key2.addEventListener('pointerover', changeOpacity2);
key2.addEventListener('pointerout', resetOpacity2);



//Third Task
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



