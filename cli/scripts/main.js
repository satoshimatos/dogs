'use strict';

function saveState() {
    if (typeof (Storage) !== 'undefined') {
        let dogsList = document.getElementById('dogsList').value;
        let fontColor = document.getElementById('fontColor').value;
        let fontStyle = document.getElementById('fontStyle').value;
        let breedName = document.getElementById('breedName').value;

        let dateTime = new Date();

        const cache = {
            dogsList: dogsList,
            fontColor: fontColor,
            fontStyle: fontStyle,
            breedName: breedName,
            dateTime: dateTime,
        };
        try {
            window.localStorage.setItem('cache', JSON.stringify(cache));
        } catch (error) {
            alert('An error occured while trying to save the cache.');
        } finally {
            alert('Cache saved successfully\n' + dateTime);
        }
    } else {
        alert('Your internet browser does not support this feature.')
        return;
    }
}

function loadState() {
    var cache = JSON.parse(window.localStorage.getItem('cache'));
    var breedCache = JSON.parse(window.localStorage.getItem('breedCache'));

    document.getElementById('breedName').value = breedCache.breedName;
    document.getElementById('dogsList').value = cache.dogsList;
    document.getElementById('fontColor').value = cache.fontColor;
    document.getElementById('fontStyle').value = cache.fontStyle;
    changeColor();
    changeFontStyle();
    
    window.localStorage.setItem('isSubmit', false);
}

function changeColor() {
    var body = document.body;
    var color = document.getElementById('fontColor').value;
    body.style.color = color;
}

function changeFontStyle() {
    var body = document.body;
    var font = document.getElementById('fontStyle').value;
    body.style.fontFamily = font;
}

function breedCache() {
    let search = document.getElementById('breedName').value
    const breedCache = {
        breedName: search,
    }
    window.localStorage.setItem('breedCache', JSON.stringify(breedCache));
}

window.onload = function () {
    loadState();
}

window.onsubmit = function () {
    window.localStorage.setItem('isSubmit', true);
    breedCache();
}
