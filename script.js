// Declare variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

// Function to add two numbers
function add(a, b) {
    let result = a + b;
    console.log("Addition:", result);
    return result;
}

// Function to subtract two numbers
function subtract(a, b) {
    let result = a - b;
    console.log("Subtraction:", result);
    return result;
}

// Function to divide two numbers
function divide(a, b) {
    if (b !== 0) {
        let result = a / b;
        console.log("Division:", result);
        return result;
    } else {
        console.log("Error: Division by zero");
        return "Error: Division by zero";
    }
}

// Function to multiply two numbers
function multiply(a, b) {
    let result = a * b;
    console.log("Multiplication:", result);
    return result;
}

// Function to display the result
function displayResult(result) {
    let resultDiv = document.getElementById('result');
    resultDiv.textContent = result;
    resultDiv.classList.remove('hidden');
}

// Function to update the chart
function updateChart(operation, result) {
    chart.data.labels.push(operation);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(result);
    });
    chart.update();
}

// Initialize the chart
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Operation Results',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Add event listeners to buttons
document.getElementById('addButton').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = add(num1, num2);
    displayResult("Addition Result: " + result);
    updateChart('Addition', result);
});

document.getElementById('subtractButton').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = subtract(num1, num2);
    displayResult("Subtraction Result: " + result);
    updateChart('Subtraction', result);
});

document.getElementById('divideButton').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = divide(num1, num2);
    displayResult("Division Result: " + result);
    updateChart('Division', result);
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result = multiply(num1, num2);
    displayResult("Multiplication Result: " + result);
    updateChart('Multiplication', result);
});

// Initial log to verify the variables
console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
