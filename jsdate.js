


const now = new Date(Date.now());
console.log('the current time is ');
console.log(now.toDateString());


/*
const today = new Date();
const birthday = new Date('Feb 1st,1996 00:00:00 ');  //may not work in all runtime
const birthday = new Date('1996-02-01T00:00:00'); //IS08601-compliant and will work reliably
const birthday = new Date('1996, 02, 01'); //the moth is 0-indexed
*/


/* 
console.log(now.getHours());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());   //the month is 0-indexed
console.log(now.getFullYear());
*/


/*
now.setFullYear(2022);
console.log(now.getFullYear());
*/


/*
now.setDate(08);
console.log(now.getDate());
*/


/*
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  console.log("Today is before January 14, 2100.");
} 

else {
    console.log("Today is after January 14, 2100.");
}
*/


/*
let newDate = new Date();
setTimeout(() => {
    newDate = Date.now();
    console.log(newDate - now);
}, 1000);
*/















