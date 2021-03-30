const nums = [1,3,7,9,2,4,6,2434,45,99];

const sum_of_nums = (total,current) =>{
    if(current&1){
        return total+current
    }
    return total
};

const result = nums.reduce(sum_of_nums)

console.log(result);