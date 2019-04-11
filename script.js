var sumSize = document.getElementById('size__sum');
var calSize = document.getElementById('size__cal');

var sumCheese = document.getElementById('size__sum__cheese');
var calCheese = document.getElementById('size__cal__cheese');

var sumSalad = document.getElementById('size__sum__salad');
var calSalad = document.getElementById('size__cal__salad');

var sumPotato = document.getElementById('size__sum__potato');
var calPotato = document.getElementById('size__cal__potato');

var totalPrice = document.getElementById('total__price');
var totalCal = document.getElementById('total__cal');

var arrBurgerСomposition = [];

'use strict';

//все возможные компоненты бургера
var allСomposition = [
    {name : 'big', sum : 100, cal : 40},
    {name : 'small', sum : 50, cal : 20},
    {name : 'cheese', sum : 10, cal : 20},
    {name : 'salad', sum : 20, cal : 5},
    {name : 'potato', sum : 15, cal : 10}
];

//Класс объекта. Объект
class Hamburger {
    constructor (element) {
        this.name = element;
        this.sum = 0;
        this.cal = 0;
    }

    sumComposition () {
        this.sum = allСomposition[this.name].sum;
    }

    calComposition () {
        this.cal = allСomposition[this.name].cal;
    }
}

// //Функция  подсчета суммы всех ингредиентов
// var totalSum = () => {
//     let arr = arrBurgerСomposition;
//     let sum = 0;

//     arr.forEach (el => sum += el.sum);
//     console.log(sum);
    
//     return sum;

// };

// //Функция  подсчета калорий  всех ингредиентов
// var totalCal = () => {
//     let arr = arrBurgerСomposition;
//     console.log(arrBurgerСomposition);
    
//     let cal = 0;

//     arr.forEach (el => cal += el.cal);
//     console.log(cal);
//     return cal;
// };

//Размер
var checkedSize = (i) => {
    
    if (i == 0) {
        sumSize.innerText = allСomposition[i].sum + ' рублей';
        calSize.innerText = allСomposition[i].cal +  ' калорий';
        
    } else if (i == 1){
        sumSize.innerText = allСomposition[i].sum  + ' рублей';
        calSize.innerText = allСomposition[i].cal +  ' калорий';
    }
    

};
//Начинка
var stuffing = (i) => {
    
    if (i == 0) {
        sumCheese.innerText = 10 + ' рублей';
        calCheese.innerText = 20 +  ' калорий';
        
    } else if (i == 1){
        sumSalad.innerText = 20  + ' рублей';
        calSalad.innerText = 5 +  ' калорий';
    } else if (i == 2 ) {
        sumPotato.innerText = 15  + ' рублей';
        calPotato.innerText = 10 +  ' калорий';
    }
};
//Функция генерирует массив с выбранными чекбоксами их всего 0-4 (0 большой бургер, 1 маленький, 2 выбран сыр, 3 - салат, 4 - картошка)
var checked = () => {
    arrBurgerСomposition = [];
    var radio = document.getElementsByClassName('checked');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            arrBurgerСomposition.push(i)
            console.log('Выбран ' + i + ' элемент');
        }
    }
    console.log(arrBurgerСomposition);

    
    
    return arrBurgerСomposition;
};

// const m = new Hamburger(2);
// m.sumComposition();
// m.calComposition();
// console.log(m);
 



document.getElementById('btn_input').addEventListener('click', checked);
 window.addEventListener ('click', function (evt) {console.log(evt);})