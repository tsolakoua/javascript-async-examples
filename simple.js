const apiList = [{ id: 1, name: 'Flight Offers Search' },
                 { id: 2, name: 'Flight Offers Price' }];

function getApiList() {
    setTimeout(() => {
        let output = '';
        apiList.forEach((api, index) => {
            output += '<li>' + (api.name) + '</li>';
        });
        document.body.innerHTML = output;
    }, 1000);
} 

function addNewApi(api) {
    setTimeout(() => {
        apiList.push(api);
    }, 2000);
} 

addNewApi([{ id: 1, name: 'Flight Create Orders' }]);
getApiList();
