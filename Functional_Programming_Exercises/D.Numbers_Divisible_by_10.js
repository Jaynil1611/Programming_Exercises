const nums = [1,3,7,9,2,4,60,34,45,100];


const numbers_div_10 = (num) => num%10===0;

const result = nums.filter(numbers_div_10);

console.log(result);