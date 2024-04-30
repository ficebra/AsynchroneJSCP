
const url1 = 'http://api.zippopotam.us/us/90210';
const url2 = 'http://api.zippopotam.us/us/90210';
const res1 = fetch(url1);
const res2 = fetch(url2);

async function concurrentRequests(){

    let result = await Promise.all([res1, res2])
        .then(values => {
            return Promise.all(values.map(r => r.json()));
        })
        .then(([data1, data2]) => {
            console.log(data1);
            console.log(data2);
        })
        console.log(result);
}