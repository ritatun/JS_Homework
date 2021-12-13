let x = prompt('Enter your age');
x = +x;

if (typeof x == 'number') {
if (isNaN(x)) {alert('No, no, it\'s not a number');}
    else {alert('X is a number');
    if (x % 2 === 0) {alert('Your age is even');}
    else {alert('Your age is odd');}
}}