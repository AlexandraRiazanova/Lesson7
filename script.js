// Написать ф-ю, принимающую объект и возвращающую число означающее максимальную глубину вложенности объектов в ней
const newObj = {
    firstA: 'a',
    firstB: 'b',
    firstC: {
        secondC: {
            thirdC: 'c'
        },
    },
    firstD: {
        secondD:{
            thirdD: {
                fourth: 'a',
            },
        },
    },
}

function counter(obj){
    let count = 0;
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            counter(obj[key]);
            count ++;     
        }
    }
    return count;
}
console.log('Максимальная глубина вложенности ' + counter(newObj))

// //В общем, не получилось посчитать максимальную глубину вложенности. 
// //Функция доходит только до второго уровня.


// // Написать ф-ю, принимающую 2 объекта и выводящую число обозначающее количество несовпадений в них.

const user1 = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 30,
    lang: 'eng'
}
const user2 = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 28,
    lang: 'ru'
}

function notMatch(obj1, obj2){
    let a = 0;
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            a++;
        }
    }
    return a;
}

console.log("Количество несовпадений - " + notMatch(user1, user2))