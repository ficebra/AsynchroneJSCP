// Task 02 | Awaiting a Call
async function awaitCall(){
    await fetch('https://randomuser.me/api/?results=10')
            .then(resp => resp.json())
            .then(data => console.log(data))
}

awaitCall()
