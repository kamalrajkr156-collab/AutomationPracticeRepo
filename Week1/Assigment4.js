                                                    //Odd or Even

// 1. Create the function
function isOddOrEven(num) {

    // 3. Check divisibility by 2
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// 2. Declare and initialize a variable
let number = 15;

// 4. Call the function and print the result
let result = isOddOrEven(number);
console.log(result);
