let add = function (numberString) {

    if (numberString[0] == '/' && numberString[1] == '/')
    {
        var delimiter = numberString[2]
        numberString = numberString.substring(4, numberString.length);
    }   
    else
        delimiter = /(?:,|\n)+/;

    var numbers = numberString.split(delimiter);
    var tmp = parseInt(0);
    if (numbers[0] != "") {
        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i]=="") {
                throw new Error("NotANumberException");
            }
            tmp = parseInt(numbers[i]) + parseInt(tmp);
        }
    }
    return tmp;
}

module.exports = add;
