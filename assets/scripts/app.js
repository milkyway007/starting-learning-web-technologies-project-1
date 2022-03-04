const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// This is a comment

/* As a comment!
   This is a comment!
   And this is!
*/

function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber)
{
    const calculationDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult)
{
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
 
function getUserNumberInput()
{
    return parseInt(userInput.value);
}

function calculateResult(calculationType)
{
    if(calculationType !== 'ADD' &&
       calculationType !== 'SUBTRACT' &&
       calculationType !== 'MULTIPLY' &&
       calculationType !== 'DIVIDE')
    {
        return;
    }

    const eneteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if(calculationType === 'ADD')
    {
        currentResult += eneteredNumber;
        mathOperator = '+';
    }
    else if(calculationType === 'SUBTRACT')
    {
        currentResult -= eneteredNumber;
        mathOperator = '-';
    }
    else if(calculationType === 'MULTIPLY')
    {
        currentResult *= eneteredNumber;
        mathOperator = '*';
    }
    else if(calculationType === 'DIVIDE')
    {
        currentResult /= eneteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, currentResult);
    writeToLog(calculationType, initialResult, eneteredNumber, currentResult);
}

function add()
{
    calculateResult('ADD');
}

function subtract()
{
    calculateResult('SUBTRACT');
}

function multiply()
{
    calculateResult('MULTIPLY');
}

function divide()
{
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);