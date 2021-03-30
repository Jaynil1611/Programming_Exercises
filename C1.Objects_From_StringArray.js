const stringArray = ["apple","orange","mango","papaya","banana","pomegranate"];

// To return object without return keyword use paranthesis ({})
const convertStringToObject = (string) => ({ [string] : string.length });

const result = stringArray.map(convertStringToObject);

console.log(result);