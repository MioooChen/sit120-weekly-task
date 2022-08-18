

let fruits = ['Kiwi', 'Lychee, Grape, Mango'];
console.log(fruits);

//find method (may undefined if not exist)
console.log(fruits.findIndex((fruit) => fruit === 'mango'));
console.log(fruits.findIndex((fruit) => fruit === 'mango1'));

//findIndex method (-1 means not found)
console.log(fruits.findIndex((fruit) => fruit ==='Mango'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit ==='Mango1')));

//push method (add an new element to the end of the array)
console.log(fruits.push('Apple'));
console.log(fruits);

//pop method (removes the last element of the array)
console.log(fruits.pop());
console.log(fruits);




let numbers = [7,5,2,6,3,1];
console.log(numbers);

//sort method
console.log(numbers.sort());
console.log(numbers);

//slice method (same as the string slice)
console.log(numbers.slice(1,3));
console.log(numbers);

//changing elements
numbers[1] = '0';
console.log(numbers);


