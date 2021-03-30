const nums = [2,3,7,9,2,4,60,34,45,100];

const sumOddEven = (resultObj,current) => {
    if(current&1){
        return {
            ...resultObj,
            odd:resultObj.odd+current
        }
    }
    return {
        ...resultObj,
        even:resultObj.even+current
    }
};

// const result = nums.reduce(sumOddEven,{
//     odd:0,
//     even:0
// });

// Initial Value can be passsed using above method or below
// After callback function [, initialValue ] can be passsed in any manner
const result = nums.reduce((resultObj,current) => {
     if(current&1){
        return {
            ...resultObj,
            odd:resultObj.odd+current
        }
    }
    return {
        ...resultObj,
        even:resultObj.even+current
    }

},{odd:0,even:0});

console.log(result);