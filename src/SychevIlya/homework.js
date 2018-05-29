var isInArray = function (arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (el) { return arr.indexOf(el) > -1; });
};
var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (result, el) {
        var digit = typeof el === 'string' ? Number(el) : el;
        return result + digit;
    }, 0);
};
var getUnique = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (result, el) {
        var isUnique = result.indexOf(el) === -1;
        if (isUnique) {
            return result.concat(el);
        }
        return result;
    }, []);
};
var reversWords = function (str) {
    return str
        .split(' ')
        // loop by words
        .map(function (word) {
        // regexp for letter
        var regExpLetter = /[a-zA-Z]/;
        // array of index spec chars, example [ 1, 5, 6]
        var indexesSpecChar = word
            .split('')
            .reduce(function (result, el, index) {
            return (regExpLetter.test(el) ? result : result.concat(index));
        }, []);
        return word
            .split('')
            // revers array of chars
            .reverse()
            // remove all spec chars
            .filter(function (char) { return regExpLetter.test(char); })
            // join result string
            .reduce(function (result, char, index) {
            // insert into result spec char from word by original position (indexesSpecChar)
            if (indexesSpecChar.indexOf(index) > -1) {
                indexesSpecChar.shift();
                return result + word.charAt(index) + char;
            }
            return result + char;
            // append spec symbol to end string
        }, '') + indexesSpecChar.map(function (index) { return (word.charAt(index)); }).join('');
    }).join(' ');
};
console.log('isInArray');
console.log(isInArray([false, 1, '2'], false, 1, '2'));
console.log('summator');
console.log(summator(1, 2, 3, '4', 5));
console.log('getUnique');
console.log(getUnique(1, 1, false, 3, '4', false, 5, 5));
console.log('reversWords');
console.log(reversWords('a1sd e1wq      y1tr'));
console.log(reversWords('a1sd123 e1wq123      y1tr123'));
