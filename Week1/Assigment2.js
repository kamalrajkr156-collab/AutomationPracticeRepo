                                                        //Conditional Statements

// Function 1: launchBrowser (uses if-else)
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome Browser...");
    } else {
        console.log("Launching Other Browser...");
    }
}

// Function 2: runTests (uses switch-case)
function runTests(testType) {

    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;

        case "sanity":
            console.log("Running Sanity Tests...");
            break;

        case "regression":
            console.log("Running Regression Tests...");
            break;

        default:
            console.log("Invalid test type. Running Smoke Tests by default...");
    }
}

// Calling the functions
launchBrowser("chrome");
runTests("regression");
