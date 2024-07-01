// This is our main function
function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        let multipleOfThree = (i % 3 == 0);
        let multipleOfFive = (i % 5 == 0);

        let output = ''

        if (multipleOfThree) {
            output += 'Fizz';
        }
        if (multipleOfFive) {
            output += 'Buzz';
        }
        if (output == '') {
            output += i
        }
        
        console.log(output)
    }

}

// Now, we run the main function:
fizzbuzz();

