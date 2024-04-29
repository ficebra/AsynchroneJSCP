function funcPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function iterateWithAsyncAwait(tabNums){
    for (const tab of tabNums) {
        await funcPromise();
        console.log(tab);
    }
    console.log("Fin");
}

console.log("Debut");
iterateWithAsyncAwait([5,9,6,2])