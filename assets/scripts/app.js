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

function add()
{
    const eneteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += eneteredNumber;
    createAndWriteOutput('+', initialResult, currentResult);
    writeToLog('ADD', initialResult, eneteredNumber, currentResult);
}

function subtract()
{
    const eneteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= eneteredNumber;
    createAndWriteOutput('-', initialResult, currentResult);
    writeToLog('SUBTRACT', initialResult, eneteredNumber, currentResult);
}

function multiply()
{
    const eneteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= eneteredNumber;
    createAndWriteOutput('*', initialResult, currentResult);
    writeToLog('MULTIPLY', initialResult, eneteredNumber, currentResult);
}

function divide()
{
    const eneteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= eneteredNumber;
    createAndWriteOutput('/', initialResult, currentResult);
    writeToLog('DIVIDE', initialResult, eneteredNumber, currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);