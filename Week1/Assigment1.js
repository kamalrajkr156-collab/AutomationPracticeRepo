                                                             //Let//var//const

// 1. Global variable
const browserVersion = "Chrome";

function getBrowserVersion() {

    if (browserVersion === "Chrome") {
        let browserVersion = "Firefox";  
        // 'let' is block-scoped
        console.log("Inside if block:", browserVersion);
    }

    console.log("Outside block, inside function:", browserVersion);
}

// 6. Calling the function
getBrowserVersion();
