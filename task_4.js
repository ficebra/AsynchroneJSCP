
// Task 04 | Awaiting Concurrent Requests
function concurrentRequests(){

    const url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
        .then(res => {
            console.log(res);
        })
}

concurrentRequests()