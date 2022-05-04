
//First Task
//Add a function that is able to change a CSS property 
//(change text color from dodgerblue to a random color)
let key = document.querySelector('.change');
let content = document.querySelector('.center');
let randomHue = Math.floor(Math.random() * 360);
function changeColor() {
  //assign the text color to random color
    content.style.color = 'hsl(' + randomHue + ', 100%, 50%)'; 
}

function changeOpacity() {
  key.style.opacity = '0.3';
}

function resetOpacity() {
  key.style.opacity = '1';
}

key.addEventListener('click', changeColor);
key.addEventListener('pointerover', changeOpacity);
key.addEventListener('pointerout', resetOpacity);



//Second Task
//Add a function that is able to change a CSS property 
//(change the bakcground image)
let key2 = document.querySelector('.change2');
let background = document.querySelector('body');
function changeImage() {
  //assign the bakcground image into another image
    background.style.backgroundImage = "url('alterBackground.png')";
}

function changeOpacity2() {
  key2.style.opacity = '0.3';
}

function resetOpacity2() {
  key2.style.opacity = '1';
}

key2.addEventListener('click', changeImage);
key2.addEventListener('pointerover', changeOpacity2);
key2.addEventListener('pointerout', resetOpacity2);




//Third Task
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
    paragraph.innerHTML = '<p id="new">Happy Sunday!</p>';
  }
  else if (day==1){
    paragraph.innerHTML = '<p id="new">Happy Monday!</p>';
  }
  else if (day==2){
    paragraph.innerHTML = '<p id="new">Happy Tuesday!</p>';
  }
  else if (day==3){
    paragraph.innerHTML = '<p id="new">Happy Wednesday!</p>';
  }
  else if (day==4){
    paragraph.innerHTML = '<p id="new">Happy Thursday!</p>';
  }
  else if (day==5){
    paragraph.innerHTML = '<p id="new">Happy Friday!</p>';
  }
  else if (day==6){
    paragraph.innerHTML = '<p id="new">Happy Saturday!</p>';
  }
}

//call the function differentDate(), which we has defined above
differentDate();


