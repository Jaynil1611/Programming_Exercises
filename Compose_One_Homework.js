const square = (x) => x*x;

const mutiplyBy3 = (x) => x*3 ;

const divideBy2 = (x) => x/2;

const convertToString = (x) => x+"";

const compose = (...functions) => {

    const wrapperFunction = (argument) => {

        const finalResult = functions.reduce((result, currentFunction)=>{
            return currentFunction(result);
        }, argument);       

        console.log(finalResult);
    };

    return wrapperFunction;
};

const arrayOfFunctions = [square,mutiplyBy3,divideBy2,convertToString];

const composeUtil = compose(...arrayOfFunctions);

composeUtil(19);