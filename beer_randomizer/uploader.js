/*function fdataRender(currentSelector, currentDataset, currentInfoName) {
    let elemRender = document.querySelector(`${currentSelector} .data`);
    elemRender.insertAdjacentText("beforeend", currentDataset[currentInfoName]);
    elemRender.classList.remove("loading");
}
*/

function fdataRender(currentSelector, currentDataset, currentInfoName) {
    let elemRender = document.querySelector(`${currentSelector} .data`);
    elemRender.innerHTML = currentDataset[currentInfoName];
    elemRender.classList.remove("loading");
}

function beerRandom() {
    fetch("https://random-data-api.com/api/beer/random_beer")
        .then((resp) => resp.json())
        .then(function (beerData) {
            /*let shpora = document.querySelector(".cheating");
            shpora.insertAdjacentText("beforeend", JSON.stringify(beerData));*/

            fdataRender(".brand", beerData, "brand");

            fdataRender(".name", beerData, "name");

            fdataRender(".style", beerData, "style");

            fdataRender(".hop", beerData, "hop");

            fdataRender(".yeast", beerData, "yeast");

            fdataRender(".malts", beerData, "malts");

            fdataRender(".ibu", beerData, "ibu");

            fdataRender(".alcohol", beerData, "alcohol");

            fdataRender(".blg", beerData, "blg");
        })
        .catch((er) => alert("Афыбка получения данных :( Пожалуйста, попробуйте перезагрузить страницу!"));
}

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://random-data-api.com/api/users/random_user")
        .then((resp) => resp.json())
        .then(function (profileData) {

            /*let shpora = document.querySelector(".cheating");
            shpora.insertAdjacentText("beforeend", JSON.stringify(profileData));*/

            fdataRender(".first_name", profileData, "first_name");

            fdataRender(".last_name", profileData, "last_name");

            dataRender = document.querySelector(".avatar");
            dataRender.insertAdjacentHTML("beforeend", `<img src="${profileData.avatar}" alt="avatar">`);

            fdataRender(".email", profileData, "email");

            fdataRender(".phone_number", profileData, "phone_number");

            fdataRender(".gender", profileData, "gender");

            fdataRender(".date_of_birth", profileData, "date_of_birth");
        })
        .catch((er) => alert("Афыбка получения данных :( Пожалуйста, попробуйте перезагрузить страницу!"));

        beerRandom();
})





