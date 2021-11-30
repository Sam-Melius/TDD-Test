// IMPORT MODULES under test here:
import { 
    addExclamationPoints,
    multiplyBySeven,
    returnAsAnArray,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAString,
    makeLuckyGreeting
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end',
    (expect) => {
        const expected1 = 'puppy!!!';

        const actual1 = addExclamationPoints('puppy');

        const expected2 = 'guppy!!!';

        const actual2 = addExclamationPoints('guppy');

        const expected3 = 'slippy!!!';

        const actual3 = addExclamationPoints('slippy');





        expect.equal(actual1, expected1, 'should return "puppy!!!"');
        expect.equal(actual2, expected2, 'should return "guppy!!!"');
        expect.equal(actual3, expected3, 'should return slippy!!!');
    });

test('multiplyBySeven should take in a number and multiply it by seven',
    (expect) => {
        const expected1 = 14;

        const actual1 = multiplyBySeven(2);

        const expected2 = 21;

        const actual2 = multiplyBySeven(3);
        
        const expected3 = 28;

        const actual3 = multiplyBySeven(4);


        expect.equal(actual1, expected1, 'should return 14');
        expect.equal(actual2, expected2, 'should return 21');
        expect.equal(actual3, expected3, 'should return 28');
    });

test('multiplyBy12ThenHalve should take in a number, multiply it by twelve then cut it in half',
    (expect) => {
        const expected1 = 6;

        const actual1 = multiplyBy12ThenHalve(1);

        const expected2 = 12;

        const actual2 = multiplyBy12ThenHalve(2);
        
        const expected3 = 18;

        const actual3 = multiplyBy12ThenHalve(3);


        expect.equal(actual1, expected1, 'should return 6');
        expect.equal(actual2, expected2, 'should return 12');
        expect.equal(actual3, expected3, 'should return 18');
    });

test('divideThenMultiply should take in a number, multiply it by twelve then cut it in half',
    (expect) => {
        const expected1 = 2;

        const actual1 = divideThenMultiply(2, 2, 2);

        const expected2 = 6;

        const actual2 = divideThenMultiply(4, 2, 3);
        
        const expected3 = 10;

        const actual3 = divideThenMultiply(8, 4, 5);


        expect.equal(actual1, expected1, 'should return 6');
        expect.equal(actual2, expected2, 'should return 6');
        expect.equal(actual3, expected3, 'should return 10');
    });
test('returnAsAnArray should take in three numbers and return those numbers in an array',
    (expect) => {
        const expected1 = [1, 2, 3];

        const actual1 = returnAsAnArray(1, 2, 3);

        const expected2 = [2, 4, 6];

        const actual2 = returnAsAnArray(2, 4, 6);
        
        const expected3 = [3, 6, 9];

        const actual3 = returnAsAnArray(3, 6, 9);


        expect.deepEqual(actual1, expected1, 'should return 1, 2, 3');
        expect.deepEqual(actual2, expected2, 'should return 2, 4, 6');
        expect.deepEqual(actual3, expected3, 'should return 3, 6, 9');

    });

test('returnAsAString should take in three numbers and return those numbers mushed together as a string',
    (expect) => {
        const expected1 = 123;

        const actual1 = returnAsAString(1, 2, 3);

        const expected2 = 246;

        const actual2 = returnAsAString(2, 4, 6);
        
        const expected3 = 369;

        const actual3 = returnAsAString(3, 6, 9);


        expect.equal(actual1, expected1, 'should return 123');
        expect.equal(actual2, expected2, 'should return 246');
        expect.equal(actual3, expected3, 'should return 369');

    });

test('makeLuckyGreeting should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number',
    (expect) => {
        const expected1 = 'Todays lucky number is ' + 4;

        const actual1 = makeLuckyGreeting(1, 3);

        const expected2 = 'Todays lucky number is ' + 10;

        const actual2 = makeLuckyGreeting(5, 5);
        
        const expected3 = 'Todays lucky number is ' + 20;

        const actual3 = makeLuckyGreeting(8, 12);


        expect.equal(actual1, expected1, 'should return "Todays lucky number is 4');
        expect.equal(actual2, expected2, 'should return "Todays lucky number is 10');
        expect.equal(actual3, expected3, 'should return "Todays lucky number is 20');

    });
    
skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

