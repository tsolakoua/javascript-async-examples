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

// the callback function will be called after the new API is pushed
// takes as param a function as callback
function addNewApi(api, callback) {
    setTimeout(() => {
        apiList.push(api);
        callback();
    }, 2000);
}

addNewApi({ id: '4', name: 'Flight Create Orders' }, getApiList);
