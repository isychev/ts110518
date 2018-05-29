type StringNumber = string | number ;
type StringNumberBoolean = string |number| boolean;

const isInArray = (arr: StringNumberBoolean[], ...args: StringNumberBoolean[]): boolean => {
    return args.every((el: StringNumberBoolean) => arr.indexOf(el) > -1);
};

const summator = (...args: StringNumber[]): number => {
     return args.reduce<number>((result: number, el: StringNumber): number => {
         const digit: number = typeof el === 'string' ? Number(el) : el;
         return result + digit;
     }, 0);
};

const getUnique = (...args: StringNumberBoolean[]): StringNumberBoolean[] => {
    return args.reduce((result: StringNumberBoolean[], el: StringNumberBoolean) => {
        const isUnique = result.indexOf(el) === -1;
        if (isUnique) {
           return result.concat(el);
        }
        return result;
    }, []);
};

const reversWords = (str: string): string => {
    return str
        .split(' ')
        // loop by words
        .map((word: string ) => {
        // regexp for letter
        const regExpLetter: RegExp = /[a-zA-Z]/;
        // array of index spec chars, example [ 1, 5, 6]
        const indexesSpecChar = word
            .split('')
            .reduce((result: number[], el: string, index: number) =>
                (regExpLetter.test(el) ? result : result.concat(index)), []);
        return word
            .split('')
            // revers array of chars
            .reverse()
            // remove all spec chars
            .filter((char: string) => regExpLetter.test(char))
            // join result string
            .reduce((result: string, char: string, index: number) => {
                // insert into result spec char from word by original position (indexesSpecChar)
                if (indexesSpecChar.indexOf(index) > -1) {
                    indexesSpecChar.shift();
                    return result + word.charAt(index) + char;
                }
                return result + char;
                // append spec symbol to end string
            }, '') + indexesSpecChar.map((index: number) => (word.charAt(index))).join('');
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
