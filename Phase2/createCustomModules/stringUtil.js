function ToUpper (a) {
    return a.toUpperCase();
}

function Reverse (a) {
    return a.split('').reverse().join('');
}

function CountWords (a) {
    return a.split(' ').length;
}

function AccuratelyCountWords(a) {
    return a.trim().split(/\s+/).length;
}


module.exports = {
    ToUpper,
    Reverse,
    CountWords,
    AccuratelyCountWords
}