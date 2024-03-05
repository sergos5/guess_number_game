"use strict";

//Загадывание случайного числа

let guess = 'Угадай число от 1 до 100';
let less = 'Загаданное число меньше, осталось попыток - ';
let more = 'Загаданное число больше, осталось попыток - ';
let end = 'Игра окончена';
let congratulation = 'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'; 
let endAtt = 'Попытки закончились, хотите сыграть еще?';
let err = 'Введи число от 1 до 100! ...а между тем попыток осталось - ';


let randNum = function () {
    return Math.round(Math.random()*99+1);
};

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

let playAgain = function (msg) {
    if (confirm (msg)) {
        guessNumber(randNum());
    } else {
        alert (end);
    }
};

let guessNumber = function(data) {  
    let n = 10;    
    let foo = function(message) {   
        n--;    
        if (n>=0) {
            let num = prompt(message);
            if (num === null) {
                alert (end);
            } else if (isNumber(num)) { 
                if (num < data) foo(more + n); 
                if (num > data) foo(less + n);
                if (num == data) playAgain(congratulation);
            } else foo(err + n);
        } else playAgain(endAtt);      
    };
    foo(guess);
};

guessNumber(randNum());

