//1 способ
/*let str;
str = prompt();
console.log("str", str);

let arr = str.split("", str.length);
console.log("arr", arr);

arr.reverse();
console.log("arr", arr);

str = arr.join('');
console.log("str", str);
alert(str);*/

//2 способ
let str;
str = prompt("Введите строку"); //ввод пользователем строки
console.log("str", str); //вывод строки в консоль

let arr = str.split("", str.length); //создание массива, напрлнение его значениями из строки
console.log("arr", arr); //вывод массива в консоль

let arrRev = []; //создание перевернутого массива
let n; //буфер

for (let i = 0; i < arr.length; i++) { //цикл по заполнению перевернутого массива
n = arr[arr.length-1-i]; //запись в буфе элементов с конца
arrRev.push(n);
}

console.log("arrRev", arrRev);

str = arrRev.join('');
console.log("str", str);
alert(str);