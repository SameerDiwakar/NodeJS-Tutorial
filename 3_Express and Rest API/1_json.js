// Inter Conversion of JSON to an object in Node.js

// Converting JSON string to object
const jsonString ='{"name": "John","age" :30,"city":"NYC"}';
const jsonObject =JSON.parse(jsonString);
console.log(jsonObject.name);

// Converting Object to JSON String
const objectToConvert = {
    name: "John",
    age :30
};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);