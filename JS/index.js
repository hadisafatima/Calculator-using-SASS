let screen = document.getElementById("calScreen") ;
let buttons = document.getElementsByClassName("btn") ;
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";
let operand = "" ;

function getValues(element) {
    console.log(window.innerwidth) ;
    if (operator === "") {
        operand1 += element.textContent;
    } else {
        operand2 += element.textContent;
        operand += element.textContent ;
    }
    screen.textContent += element.textContent;
}

function operate(op){
    if(operator === ""){
        operator = op ;
    }else{
        operand2 += op.textContent ;
    }
    screen.textContent += op ;
}

function calculation(){
    console.log("operand1 : " + operand1);
    console.log("operand2 : " + operand2);
    console.log("operator : " + operator);

    let num1 = parseFloat(operand1) ;
    let num2 = parseFloat(operand2) ;

    switch(operator){
        case '+' : 
            result = num1 + num2 ;
            break;
        
        case '-' : 
            result = num1 - num2 ;
            break ;

        case '*' : 
            result = num1 * num2 ;
            break ;

        case '/' : 
            result = num1 / num2 ;
            break ;
        
        default : 
            screen.textContent = "Error!!" ;
            break; 
    }

    screen.textContent = result ;
    operand1 = screen.textContent ;
    operand2 = "" ;
    operator = "" ;
    operand = "" ;
    console.log("Results : " +  result) ;
}

function dltLast(){
    if(operand1 !== "" && operator !== "" && operand2 === ""){
        dltOp() ;
    }else{
        let currentInputs = screen.textContent ;
        let newInputs = currentInputs.slice(0,-1) ; 
        let newVal = operand.slice(0, -1) ;
        // slice(0, -1) will start reading the string from the position of 1st argument i.e '0' until before
        // the last character i.e '-1' .
        screen.textContent = newInputs ;
        
        if(operator === ""){
            operand1 = newInputs ;
        }else{
            operand2 = newVal ;
            operand = "" ;
        }
    }
}

function dltOp(){
    operator = "" ;
}