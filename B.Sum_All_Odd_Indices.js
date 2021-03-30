const nums = [1,3,7,9,2,4,60,34,45,100];

const sum_odd_indices = (total,current,index) => {
    if(index&1) {
       return total+current
    }
    return total
};

const sum_even_indices = (total,current,index) => {
    if(!(index&1)) {
       return total+current
    }
    return total
};

const result1 = nums.reduce(sum_odd_indices,0)
const result2 = nums.reduce(sum_even_indices,0);

console.log("Odd Indices Sum:",result1);
console.log("Even Indices Sum:",result2);