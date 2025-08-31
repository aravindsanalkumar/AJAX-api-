const requestObj = new XMLHttpRequest();
requestObj.open("GET", "https://dummyjson.com/users");
requestObj.send();

requestObj.onreadystatechange = () => {
    if (requestObj.readyState == 4 && requestObj.status == 200) {
        const usersObj = JSON.parse(requestObj.responseText);
        let searchInput = document.getElementById('search');
        if (searchInput.value === "") {
            displayData(usersObj)
        }

        searchInput.addEventListener('keyup', function (e) {
            searchData(usersObj, e.target.value)
        })
    }
}





function displayData(obj) {
    obj.users.forEach(user => {
        let cardRow = document.getElementById('cardRow');
        cardRow.innerHTML += `<div class="col-md-3" >
                                <div class="card" style="width: 300px;box-shadow: 5px 5px 5px lightblue;">
                                <img
                                src="https://dummyjson.com/icon/emilys/128"
                                class="card-img-top"
                                alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">${user.firstName + " " + user.lastName}</h5>
                                    <p>Phn:${user.phone}</p>
                                    <p>${user.email}</p>
                                </div>
                            </div>
                         </div>`;

    })
}


function searchData(obj, search) {
    search = search.toLowerCase();
    const objData = obj.users.filter(user => user.firstName.toLowerCase().includes(search));
    cardRow.innerHTML = "";

    objData.forEach(user => {
        let cardRow = document.getElementById('cardRow');
        cardRow.innerHTML += `<div class="col-md-3" >
                                <div class="card" style="width: 300px;box-shadow: 5px 5px 5px lightblue;">
                                <img
                                src="https://dummyjson.com/icon/emilys/128"
                                class="card-img-top"
                                alt="..."
                                />
                                <div class="card-body">
                                    <h5 class="card-title">${user.firstName + " " + user.lastName}</h5>
                                    <p>Phn:${user.phone}</p>
                                    <p>${user.email}</p>
                                </div>
                            </div>
                         </div>`;

    })
    console.log(objData)
}


