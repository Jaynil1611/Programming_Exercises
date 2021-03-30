const nums = [1,3,7,9,2,4,60,34,45,100];

const Incr_Decr = (num) => {
    if(num&1){
        return (num+1)
    }
    return (num-1);
};

const result = nums.map(Incr_Decr)

console.log(result);