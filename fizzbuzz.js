// This is our main function
function fizzbuzz() {
    for (let i = 1; i < 256; i++) {
        let multipleOfThree = (i % 3 == 0);
        let multipleOfFive = (i % 5 == 0);
        let multipleOfSeven = (i % 7 == 0);
        let multipleOfEleven = (i % 11 == 0);
        let multipleOfThirteen = (i % 13 == 0);
        let multipleOfSeventeen = (i % 17 == 0);

        let output = ''

        if (multipleOfEleven) {
            output += 'Bong'
        } else if (multipleOfSeventeen) {
            if (multipleOfSeven) {
                output += 'Bang';
            }
            if (multipleOfFive) {
                output += 'Buzz';
            }
            if (multipleOfThree) {
                output += 'Fizz'
            }
        } else {
            if (multipleOfThree) {
                output += 'Fizz';
            }
            if (multipleOfFive) {
                output += 'Buzz';
            }
            if (multipleOfSeven) {
                output += 'Bang'
            }
        }

        if (multipleOfThirteen) {
            if (output.includes('B')) {
                let positionOfB = output.indexOf('B');
                output = [output.slice(0, positionOfB), 'Fezz', output.slice(positionOfB)].join('');
            } else {
                output += 'Fezz'
            }
        }

        if (output == '') {
            output += i
        }
        
        console.log(output)
    }

}

// Now, we run the main function:
fizzbuzz();
