module.exports = function toReadable (number) {
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    let string = number.toString();
    let result = function toReadable(number){
    if (number === 0) {return 'zero'}
    if (number<10) {return units[number]}
    if (number>9 && number<20) {return ten[number-10]}
    if (number>19&&number<100) {return tens[string[0] - 1] + ' ' + units[string[1]]} 
    if ((number>99)&&(number<1000)&&(string[1] !== '1')&&(string[1] !== '0')) {return hundreds[string[0]-1] + ' ' + tens[string[1]-1] + ' ' + units[string[2]]}
    if ((number>99)&&(number<1000)&&(string[1] === '0')) {return hundreds[string[0]-1] + ' ' + units[string[2]]}
    else {return hundreds[string[0]-1] + ' ' + ten[string[2]]}
    }
    return result(number).trim()
}
