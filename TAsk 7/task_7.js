let arr = [11, 22, 00, 44, ".4p5", true, 77, 088, 99];
console.log(arr);
//console.log(arr.length);
let even = 0, odd = 0; nul = 0;

for (let i = 0; i < arr.length; i++) {

if ((arr[i] % 2 === 0) && (arr[i] !== 0) && (typeof arr[i] === 'number')) {
even++;
};

if ((arr[i] % 2 !== 0) && (arr[i] !== 0) && (typeof arr[i] === 'number')) {
odd++;
//console.log(arr[i]);
};

if (arr[i] === 0) {
nul++;
};

};
console.log("the number of even elements of the array:");
console.log(even);
alert(even);
console.log("the number of odd elements of the array:");
console.log(odd);
alert(odd);
console.log("the number of null elements of the array:");
console.log(nul);
alert(nul);