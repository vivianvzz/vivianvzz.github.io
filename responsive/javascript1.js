//First task
//Change the three images of class "moon" everytime when they are being clicked on
let navImages = document.querySelectorAll('.moon');
console.log(navImages);

function firstImage() {
  navImages[0].src = 'cartoon1.png';
  navImages[0].srcset = 'cartoon1@2x.png';
}

function secondImage() {
  navImages[1].src = 'cartoon2.png';
  navImages[1].srcset = 'cartoon2@2x.png';
}

function thirdImage() {
  navImages[2].src = 'cartoon3.png';
  navImages[2].srcset = 'cartoon3@2x.png';
}

navImages[0].addEventListener('click', firstImage);
navImages[1].addEventListener('click', secondImage);
navImages[2].addEventListener('click', thirdImage);





//Second Task
//Change the opacity of other images when one image is being hovered on
let images = document.querySelectorAll('.moon');

function changeOpacity() {
  // change opacity of EVERY image
  images[0].style.opacity = '0.3';
  images[1].style.opacity = '0.3';
  images[2].style.opacity = '0.3';

  // imediately keep current image opaque
  this.style.opacity = '1';
  // in event handlers, "this" refers to the HTML element that received the event
  // console.log(this);
}

function resetOpacity() {
  // then reset opacity of every image
  images[0].style.opacity = '1';
  images[1].style.opacity = '1';
  images[2].style.opacity = '1';
}

// event listeners for hover on
images[0].addEventListener('pointerover', changeOpacity);
images[1].addEventListener('pointerover', changeOpacity);
images[2].addEventListener('pointerover', changeOpacity);

// event listeners for hover off
images[0].addEventListener('pointerout', resetOpacity);
images[1].addEventListener('pointerout', resetOpacity);
images[2].addEventListener('pointerout', resetOpacity);




//Third Task
//add a function that is able to change a CSS property (change background-color)
let background = document.querySelector('body');

let hour = new Date().getHours(); // get current hour
console.log(hour); // display current hour in the web console

function changeBackgroundColor() {
  if (hour >= 18 || hour < 6) { // between 6:00 PM and 6:00 AM
    background.style.backgroundColor = 'midnightblue'; //means if night, background should be deep blue
  }
  else {
    background.style.backgroundColor = '#77b5fe'; //means if day, background should be light blue
  }
}

//call the function changeBackgroundColor(), which we has defined above
changeBackgroundColor();





//Fourth Task
// use the JavaScript Date object to update some aspect of the page for every day of the week. 
// different text could appear for each of the seven days of the week. 

// The getDay() method returns the day of the week (0 to 6) of a date.
// 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wendesday, 4 for Thursday, and 5 for Friday, and 6 for saturday.
let day = new Date().getDay(); //get day of a week
console.log(day); // display today's day in console
let paragraph = document.getElementById('new');
console.log(paragraph);  // display th text we want to change in console

// change HTML of that specific paragraph
function differentDate() {
  if (day==0){
    paragraph.innerHTML = '<p id="new">Today is lucky Sunday!</p>';
  }
  else if (day==1){
    paragraph.innerHTML = '<p id="new">Today is lucky Monday!</p>';
  }
  else if (day==2){
    paragraph.innerHTML = '<p id="new">Today is lucky Tuesday!</p>';
  }
  else if (day==3){
    paragraph.innerHTML = '<p id="new">Today is lucky Wednesday!</p>';
  }
  else if (day==4){
    paragraph.innerHTML = '<p id="new">Today is lucky Thursday!</p>';
  }
  else if (day==5){
    paragraph.innerHTML = '<p id="new">Today is lucky Friday!</p>';
  }
  else if (day==6){
    paragraph.innerHTML = '<p id="new">Today is lucky Saturday!</p>';
  }
}

//call the function differentDate(), which we has defined above
differentDate();



