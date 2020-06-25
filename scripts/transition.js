// var buttons = document.getElementsByClassName('tabs');
// var boxes = document.getElementsByClassName('box');

var timing = setInterval(setText, 900);

var texts = ["a Blogger", "an Entrepreneur", "a Traveler", "a Cook", "a Health Nut", "a Web Developer"];

var prevword;
var currentword;
var count;

function setText() {
    if (prevword == null || (count >= texts.length)) {
        count = 0;
        currentword = texts[count];
        console.log(currentword)
        document.getElementById("profileoption").innerHTML = currentword;
        prevword = currentword;
        count += 1;
    } else {
        document.getElementById("profileoption").innerHTML = texts[count];
        currentword = texts[count];
        prevword = currentword;
        count += 1;
    }
}

// function color_change(tab) {

//     if (tab == 'about') {
//         document.body.style.backgroundColor = "#ffccff";
//         transition(0);

//     } else if (tab == 'travel') {
//         document.body.style.backgroundColor = "#ccccff";
//         transition(1);

//     } else if (tab == 'recipes') {

//         document.body.style.backgroundColor = "#ccffff";
//         transition(2);

//     } else {
//         document.body.style.backgroundColor = "#ccffcc";
//         transition(3);

//     }

// }

// function transition(num) {
//     for (var b = 0; b < buttons.length - 1; b++) {
//         if (b == num) {
//             console.log('here1');
//             boxes[num].style.display = 'block';
//             buttons[num].classList.add = 'active';
//             console.log('here2');
//         } else {
//             boxes[b].style.display = 'none';
//             buttons[b].classList.remove = 'active';
//         }

//     }
// }