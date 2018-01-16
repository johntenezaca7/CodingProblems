//Add %20 to all spaces in a string;

const urlify = (str) => {
    return str.split(' ').join('%20')
}

console.log(urlify(' John '))