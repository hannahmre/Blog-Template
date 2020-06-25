// var buttons = document.getElementsByClassName('tabs');
// var boxes = document.getElementsByClassName('box');

var timing = setInterval(setText, 800);

var texts = ["a Blogger", "an Entrepreneur", "a Traveler", "a Cook", "a Health Nut", "a Web Developer"];

// function setText() {
//     while (x == false) {
//         for (var word = 0; word < texts.length - 1; word++) {
//             document.getElementById("profileoption").innerHTML = texts[word];
//         }
//     }
// }

var prevword;
var currentword;

function setText() {
    console.log('in here')
    for (var word = 0; word < texts.length; word++) {
        // console.log(texts[word])
        if (prevword != texts[word]) {
            currentword = texts[word];
            console.log(currentword)
            document.getElementById("profileoption").innerHTML = currentword;
            prevword = texts[word];

        } else {
            document.getElementById("profileoption").innerHTML = texts[word + 1];
            prevword = texts[word + 1];
        }

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