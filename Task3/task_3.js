
// Task 03 | Handling Errors with Async/Await
async function awaitCall(){
    await fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                if(res.ok){
                    res.json().then(data => {
                        console.log(data);
                    })
                }
                else{
                    console.log("Erreur lors de l'execution");
                }
            })
}

awaitCall()


// Task 03 | Chaining Async/Await
function AsyncFunction1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('AsyncFunction1');
        }, 1000);
    })
}

function AsyncFunction2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('AsyncFunction2');
        }, 1000);
    })
}

function AsyncFunction3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('AsyncFunction3');
        }, 1000);
    })
}

async function chainedAsyncFunctions(){
    const res = await AsyncFunction1();
    console.log(res);

    const res2 = await AsyncFunction2();
    console.log(res2);

    const res3 = await AsyncFunction3();
    console.log(res3);
}

chainedAsyncFunctions()