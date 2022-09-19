//Задание 3
/*Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и 
возвращает сумму этих двух чисел. Выведите в консоль результат. */


function getSum (num){
    return function getNum(number){
        return (number + num)
    }
}
const result = getSum (2)
console.log (result(4))