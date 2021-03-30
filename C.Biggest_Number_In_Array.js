const nums = [1,3,7,9,2,4,226,34,45,299];

const findBiggestNumber = (highest,current)=>{
    if(current>highest){
       highest = current
    }
    return highest;
};

const result = nums.reduce(findBiggestNumber)

console.log(result);