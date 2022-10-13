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

// When Promise resolved we call the getApiList()
addNewApi({ id: '4', name: 'Flight Create Orders' }, getApiList).then(getApiList);
