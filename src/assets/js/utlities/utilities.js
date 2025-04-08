function loadData(api, cb) {
    fetch(api)
        .then(response => response.json())
        .then(data => cb(data.pets || data.categories || data.data))
}

function getElementById(id) {
    return document.getElementById(id);
}

function getElementByClassName(className) {
    return document.getElementsByClassName(className);
}