//Printing a value normal function
function disp(){
console.log("Function Intro");
}
disp()

//Call a function to execute the code inside the function block
//Adding 2 number  execute the code inside function Block without using return
function Adding(a,b){ // FUnction definition (parameters)
   /*  let a=10
    let b=20 */
    c=a+b
console.log(c);
}
Adding(10,20)//Function call (argumemts)


//Call a function to execute the code inside the function block and return the value 
//Adding 2 number  execute the code inside function Block using return
function SubRe(a,b){ // FUnction definition (parameters)
   /*  let a=10
    let b=20 */
    c=a-b
    return c    
}
console.log(SubRe(10,20))//Function call (argumemts)