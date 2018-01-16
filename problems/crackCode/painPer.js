const isPalenDrome = (str) => {
    var rev = str.split('').reverse().join('');

    return str === rev
}

console.log(isPalenDrome('racecar'))