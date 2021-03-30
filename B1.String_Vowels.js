const stringArray = ["apple","orange","mango","papaya","banana","pomegranate"];

const vowels = /[aeiouy]+/;

const filterVowelStrings = (string) => string.search(vowels)>=0;

const result = stringArray.filter(filterVowelStrings);

console.log(result);