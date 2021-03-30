const stringArray = ["apple","orange","mango","papaya","banana","pomegranate"];

const mapStringToLength = (stringLengths, currentString) => {
    let length = currentString.length;    
    if(length in stringLengths){
       return {
           ...stringLengths,
           [length]: stringLengths[length] + 1
       }
    }
    return {
        ...stringLengths,
        [length]: 1
    }
}

const result = stringArray.reduce(mapStringToLength,{})

console.log(result);