const apiList = [{ id: 1, name: 'Flight Offers Search' },
                 { id: 2, name: 'Flight Offers Price' }];

function getApiList() {
    setTimeout(() => {
        let output = '';
        apiList.forEach((api) => {
            output += '<li>' + (api.name) + '</li>';
        });
        document.body.innerHTML = output;
    }, 1000);
}

function addNewApi(api) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            apiList.push(api);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error");
            }
        }, 2000);
    });

}
// await waits for an async process to complete before moving on
// to use await we need to define the function that calls it as async
async function init() {
    await addNewApi({ id: '4', name: 'Flight Create Orders' });
    getApiList();
}

init();