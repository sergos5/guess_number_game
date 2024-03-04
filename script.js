'use strict';

//Загадывание случайного числа

let guess = 'Угадай число от 1 до 100';
let less = 'Загаданное число меньше, осталось попыток - ';
let more = 'Загаданное число больше, осталось попыток - ';
let end = 'Игра окончена';
let congratulation = 'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'; 
let endAtt = 'Попытки закончились, хотите сыграть еще?';
let err = 'Введи число!';


let randNum = function () {
    return Math.round(Math.random()*100);
};

let guessNumber = function(data) {  
    let n = 10;    
    let foo = function(message) {   
        n--;    
        if (n>=0) {
            let num = prompt(message);             
            if (isNaN(num)) {
                foo(err);
            } else if (num === null) {
                alert (end);
            } else if (num<data) {
                foo(more + n); 
            } else if (num>data) {
                foo(less + n);
            } else {
                if (confirm(congratulation)) {
                    guessNumber(randNum());
                } else { 
                    alert (end);
                }
            }
        } else  {           
            if (confirm(endAtt)) {
                guessNumber(randNum());
            } else {
                alert (end);
            }
        }      
    };
    foo(guess);
};

guessNumber(randNum());


