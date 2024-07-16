// Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading",
//"painting"]}, explain how you would extract the value of the "age" key.

// How would you convert the following object into a JSON data string? {"title": "Book", "pages":
// 200}

const jstr ={"name": "Alice", "age": 25, "hobbies": ["reading","painting"]};

console.log(jstr.age);
                    
const objectToConvert = {
    title: "Book",
    price : 200
};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);