'use strict';

//Загадывание случайного числа

let guess = 'Угадай число от 1 до 100';
let less = 'Загаданное число меньше';
let more = 'Загаданное число больше';
let end = 'Игра окончена';
let congratulation = 'Поздравляю, Вы угадали!!!'; 
let err = 'Введи число!';

let guessNumber = function(data) {    
    let foo = function(message) {
        let num = prompt(message);       
        if (isNaN(num)) {
            foo(err);
        } else if (num === null) {
            alert (end);
        } else if (num<data) {
            foo(more); 
        } else if (num>data) {
            foo(less);
        } else {
            alert(congratulation);
        }
    };
    foo(guess);
};

guessNumber(61);


