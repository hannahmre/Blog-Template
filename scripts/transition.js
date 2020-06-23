var buttons = document.getElementsByClassName('tabs');
var boxes = document.getElementsByClassName('box');

console.log(buttons[0]);
console.log(buttons[1]);
console.log(buttons[2]);
console.log(buttons[3]);

function color_change(tab) {

    if (tab == 'about') {
        document.body.style.backgroundColor = "#ffccff";
        transition(0);

    } else if (tab == 'travel') {
        document.body.style.backgroundColor = "#ccccff";
        transition(1);

    } else if (tab == 'recipes') {

        document.body.style.backgroundColor = "#ccffff";
        transition(2);

    } else {
        document.body.style.backgroundColor = "#ccffcc";
        transition(3);

    }

}

function transition(num) {
    for (var b = 0; b < buttons.length - 1; b++) {
        if (b == num) {
            console.log('here1');
            boxes[num].style.display = 'block';
            buttons[num].classList.add = 'active';
            console.log('here2');
        } else {
            boxes[b].style.display = 'none';
            buttons[b].classList.remove = 'active';
        }

    }
}