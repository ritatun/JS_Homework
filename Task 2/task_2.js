let x, a, b;
//number
//a = 10;
//b = 5;
//x = a + b;

//string
a = '10';
b = 5;
x = a + b;

//boolean
/*a = 10;
b = 5;
x = a == b;*/

switch(typeof x) {
    case 'number':
    alert('X is a number');
    break;
    case 'string':
    alert('X-string');
    break;
    case 'boolean':
    alert('X-boolean');
    break;
    default:
    alert('I don\'t know type of X');
    break;
}

console.log(typeof x);
console.log(x); 