function callback() {
    console.log("Adding the given numbers....");
}

const add = function (a,b,callback) {
    let result = a+b;
    console.log('result =',result);
    callback();
}

add(122,69,callback);