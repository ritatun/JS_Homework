let blalala = ['pen','pineapple','apple','pen'];
console.log(blalala);
console.log(blalala.length-1);

let status;


for (let j = 1; j <= blalala.length-1; j++) {
if (blalala[0] != blalala[j] ) {
status = false;
break;
}
};

if (status === false) {
console.log("false");
alert("false");
}
else {
console.log("true");
alert("true");
}