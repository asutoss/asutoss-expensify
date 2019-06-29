const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name:'AsUToss',
            age: 20
        });
        //reject('something went wrong');
    }, 4000);
    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my new promise');
        }, 4000);
        
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});


console.log('after');