document.querySelector('.calculate-btn').addEventListener('click', computeResults);

function computeResults () {
    var loan_amount_input = document.querySelector('.loan-amount-input').value;
    var loan_term_input = document.querySelector('.loan-term-input').value;
    var interest_rate_input = document.querySelector('.interest-rate-input').value;

const principal = parseFloat (loan_amount_input);
const calculateinterest = parseFloat (interest_rate_input) / 100 / 12;
const calculateyear = parseFloat (loan_term_input) * 12;

const x = Math.pow(1 + calculateinterest, calculateyear);
const monthly = (principal * x * calculateinterest) / (x - 1);
const monthlyPyament = monthly.toFixed(2);
const totalInterest = (monthly * calculateyear - principal).toFixed(2);
const totalPayment = (monthly * calculateyear).toFixed(2);

document.querySelector('.emi-amount').innerHTML = '₹' + monthlyPyament;
document.querySelector('.interest-rate').innerHTML = '₹' + totalInterest;
document.querySelector('.total-amount').innerHTML = '₹' + totalPayment;
document.querySelector('.loan-amount').innerHTML = '₹' + loan_amount_input;
}