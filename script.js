//Задание 1
console.log('Задание 1')
let number = 123
let stroka = 'строка' 
let bool = true
let nothing = null
console.log(stroka + number); //string  +  integer = string
console.log(stroka + bool); //string + boolean = string
console.log(nothing + number); //null + number = number
console.log(number + bool); //number + boolean = number
console.log(bool + nothing); //boolean + null = number
console.log(nothing + stroka); //null + string = string
//Задание 2
console.log('Задание 2')
let a = 2
let b = 3
console.log(`a = ${a}, b = ${b}`);
let p = a * 2 + b * 2 
console.log(`Периметр = ${p}`)
let s = a * b
console.log(`Площадь = ${s}`)
let o = p/s
console.log(`Отношение = ${o}`)
//Задание 3
console.log('Задание 3')
let c = 25;
let f = 66.2;
console.log(`${c}\u00B0C соответствует ${c * 1.8 +32}\u00B0F`)
console.log(`${f}\u00B0F соответствует ${(f - 32) / 1.8}\u00B0C`)
//Задание 4
console.log('Задание 4')
let year = prompt('Введите год');
((year % 4 == 0)&&(year % 100 != 0)) ? alert('true') : alert('false');
//Задание 4
console.log('Задание 5')
let fi = Number(prompt('Введите первое число:'))
let se = Number(prompt('Введите второе число:'));
(se == 10 || fi == 10 || fi + se == 10) ? console.log ('Истина') : console.log ('Ложь')
