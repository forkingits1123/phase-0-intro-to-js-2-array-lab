// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
});

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function appendCat(name) {
    const newArray = [...cats];
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    const newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    const newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
}