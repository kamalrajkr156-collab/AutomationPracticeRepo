                                             //Number Type //Conditional Statements

// 1. Create a function that takes a number as parameter
function checkNumberType(num) {

    // 3. Conditional checks
    if (num > 0) {
        return "Positive Number";
    } else if (num < 0) {
        return "Negative Number";
    } else {
        return "Number is Zero";
    }
}

// 2. Declare and initialize a variable
let number = -10;

// 5. Call the function and print the result
let result = checkNumberType(number);
console.log(result);
