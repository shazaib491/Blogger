// const answer = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Promise Resolved")
//     } {
//         reject("Rejected")
//     }
// })

// answer.then((data) => {
//     console.log(data)
// }).catch(error => {
//     console.log(error);
// })


// 
// let promise=new Promise((resolve,reject)=>{
//     if(true){
//         resolve("Promise Resolved")
//     }else{
//         reject("Promise Reject")
//     }
// })

// promise.then(data=>{
//     console.log(data)
// }).catch(error=>{
//     console.log(error)
// })


// first promise number enter
// second promise number square
// third promise square =>cube
// 5
// 5*5
// 25*25*25

function getNumber(number) {
    let promise = new Promise((resolve, reject) => {
        if (number) {
            resolve(number)
        } else {
            reject("Please Provide Value")
        }
    })
    return promise;
}


function square(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve(value * value)
        } else {
            reject("Please Provide Value for Calculation")
        }
    })

}

function cube(value) {
    return new Promise((resolve, reject) => {
        if (value) {
            resolve(value * value * value)
        } else {
            reject("Please Provide Value for Calculationdffeihyufewr")
        }
    })
}


// promise hell 
// getNumber(5).then((number) => {
//     square(number).then((sqr) => {
//         console.log(sqr)
//         cube(sqr).then((data) => {
//             console.log(data)
//         }).catch(error => {
//             console.log(error)
//         })
//     }).catch(error => {
//         console.log(error)
//     })
// }).catch(error => {
//     console.log(error)
// })

async function resolveAll() {
    try {
        const number = await getNumber(5);
        const sqr = await square(number);
        const cb = await cube(sqr);
    } catch (error) {
        console.log(error);
    }
}

resolveAll()