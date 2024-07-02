import { get } from "http";

const readline = require('readline-sync');

// This is our main function
function fizzbuzz() {
    let maximumNumber = getMaximumNumber();
    let rules = chooseRules();

    for (let i = 1; i < (maximumNumber + 1); i++) {
        let multipleOfThree = ((i % 3 == 0) && rules[0]);
        let multipleOfFive = ((i % 5 == 0) && rules[1]);
        let multipleOfSeven = ((i % 7 == 0) && rules[2]);
        let multipleOfEleven = ((i % 11 == 0) && rules[3]);
        let multipleOfThirteen = ((i % 13 == 0) && rules[4]);
        let multipleOfSeventeen = ((i % 17 == 0) && rules[5]);

        let output = '';

        if (multipleOfEleven) {
            output += 'Bong';
        } else if (multipleOfSeventeen) {
            if (multipleOfSeven) {
                output += 'Bang';
            }
            if (multipleOfFive) {
                output += 'Buzz';
            }
            if (multipleOfThree) {
                output += 'Fizz';
            }
        } else {
            if (multipleOfThree) {
                output += 'Fizz';
            }
            if (multipleOfFive) {
                output += 'Buzz';
            }
            if (multipleOfSeven) {
                output += 'Bang';
            }
        }

        if (multipleOfThirteen) {
            if (output.includes('B')) {
                let positionOfB = output.indexOf('B');
                output = [output.slice(0, positionOfB), 'Fezz', output.slice(positionOfB)].join('');
            } else {
                output += 'Fezz';
            }
        }

        if (output == '') {
            output += i;
        }
        
        console.log(output)
    }

}

function getMaximumNumber() {
    console.log('Please enter maximum number: ');
    return +readline.prompt();
}

function chooseRules() {
    console.log('Please enter Y to accept a rule, or anything else to decline:');
    let rules = new Array(6);
    rules[0] = getRule(3);
    rules[1] = getRule(5);
    rules[2] = getRule(7);
    rules[3] = getRule(11);
    rules[4] = getRule(13);
    rules[5] = getRule(17);

    return rules;
}

function getRule(n: number) {
    console.log(`Would you like the rule for multiples of ${n}?`);
    return (readline.prompt() == 'Y')
}


// Now, we run the main function:
fizzbuzz();