


var helloworld = 'Hello World';
console.log(helloworld);

// Comparing strings
let a = 'a';
let b = 'b';
if (a < b){
    console.log(a + ' is less than ' + b);
}
else if (a > b){
    console.log(a + ' is greater than ' + b);
}
else{
    console.log(a + ' and ' + b + ' are equal. ');
}

// lowercase and uppercase
let c = 'c';
let d = 'D';
console.log(c.toUpperCase());
console.log(d.toLowerCase());

// shows choosen character
let text = 'Hello World';
let char = text.charAt(0);
let char2 = text.charAt(1);
console.log(char);
console.log(char2);

// the length of string
let text1 = 'dsafshdgaskjdnbkhw98hiuskjdbndka';
let length = text1.length;
console.log(length);

//get string slice {slice(start, end)}
let text2 = 'mio, amo, fujiko';
let part = text2.slice(5,9);
console.log(part);



