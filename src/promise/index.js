const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
            console.log('Hey dude!');
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}

const somethingWillHapped2 = () => {
    return new Promise((reject, resolve) => {
        if(true){
            setTimeout(()=>{
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoooops!');
            reject(error);
        }
    })
}

somethingWillHapped2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somethingWillHapped(), somethingWillHapped2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })