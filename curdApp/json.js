// javascriot object notation
let obj = {
    name: "admin",
    age: 18
}


let convertObject=JSON.stringify(obj);

// let parseToPHP=JSON.parse(convertObject)

// console.log(parseToPHP)

// localStorage.setItem("userObject",convertObject);


// session
// cookies

let data=localStorage.getItem("userObject");
console.log(JSON.parse(data));


localStorage.clear()