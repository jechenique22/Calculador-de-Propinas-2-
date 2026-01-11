
let historyData = [];


const tipPercentages = {
    excelente: 0.20,
    bueno: 0.15,
    regular: 0.10,
    malo: 0.05
};


const serviceTexts = {
    excelente: 'Excelente',
    bueno: 'Bueno',
    regular: 'Regular',
    malo: 'Malo'
};


const tipForm = document.getElementById('tipForm');
const billAmountInput = document.getElementById('billAmount');
const serviceQualitySelect = document.getElementById('serviceQuality');
const numPeopleInput = document.getElementById('numPeople');
const resultContainer = document.getElementById('resultContainer');
const historyContainer = document.getElementById('historyContainer');
const clearHistoryBtn = document.getElementById('clearHistory');


document.addEventListener('DOMContentLoaded', loadHistory);


tipForm.addEventListener('submit', calculateTip);


clearHistoryBtn.addEventListener('click', clearHistory);


function validateInputs() {
    let isValid = true;
    const errorBill = document.getElementById('errorBill');
    const errorPeople = document.getElementById('errorPeople');
    
    errorBill.textContent = '';
    errorPeople.textContent = '';
    
    const bill = parseFloat(billAmountInput.value);
    const people = parseInt(numPeopleInput.value);
    
    if (!bill || bill <= 0) {
        errorBill.textContent = 'Ingresa un monto válido mayor a 0';
        isValid = false;
    }
    
    if (!people || people <= 0) {
        errorPeople.textContent = 'Ingresa un número válido de personas';
        isValid = false;
    }
    
    return isValid;
}


function calculateTip(e) {
    e.preventDefault();
    
    if (!validateInputs()) return;
    
    const bill = parseFloat(billAmountInput.value);
    const quality = serviceQualitySelect.value;
    const people = parseInt(numPeopleInput.value);
    
    const tipPercentage = tipPercentages[quality];
    const tipAmount = bill * tipPercentage;
    const totalAmount = bill + tipAmount;
    const perPersonTip = tipAmount / people;
    const perPersonTotal = totalAmount / people;
    
    
    const calculation = {
        id: Date.now(),
        date: new Date().toLocaleString('es-AR'),
        billAmount: bill,
        serviceQuality: quality,
        numPeople: people,
        tipPercentage: tipPercentage * 100,
        tipAmount: tipAmount,
        totalAmount: totalAmount,
        perPersonTip: perPersonTip,
        perPersonTotal: perPersonTotal
    };
    
   
    displayResult(calculation);
    
    
    addToHistory(calculation);
}


function displayResult(calc) {
    document.getElementById('tipAmount').textContent = formatCurrency(calc.tipAmount);
    document.getElementById('totalAmount').textContent = formatCurrency(calc.totalAmount);
    document.getElementById('perPersonTip').textContent = formatCurrency(calc.perPersonTip);
    document.getElementById('perPersonTotal').textContent = formatCurrency(calc.perPersonTotal);
    
    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}


function addToHistory(calculation) {
    historyData.unshift(calculation);
    saveHistory();
    renderHistory();
}


function saveHistory() {
    localStorage.setItem('tipHistory', JSON.stringify(historyData));
}


function loadHistory() {
    const saved = localStorage.getItem('tipHistory');
    if (saved) {
        historyData = JSON.parse(saved);
        renderHistory();
    }
}

    function renderHistory() {
    if (historyData.length === 0) {
        historyContainer.innerHTML = '<p class="empty-message">No hay cálculos guardados aún</p>';
        return;
    }
    
    let html = '';
    
    historyData.forEach(function(calc) {
        html += '<div class="history-item">';
        html += '<div class="history-date">' + calc.date + '</div>';
        html += '<div class="history-details">';
        html += '<div class="history-detail"><strong>Cuenta:</strong> ' + formatCurrency(calc.billAmount) + '</div>';
        html += '<div class="history-detail"><strong>Servicio:</strong> ' + serviceTexts[calc.serviceQuality] + ' (' + calc.tipPercentage + '%)</div>';
        html += '<div class="history-detail"><strong>Personas:</strong> ' + calc.numPeople + '</div>';
        html += '<div class="history-detail"><strong>Propina:</strong> ' + formatCurrency(calc.tipAmount) + '</div>';
        html += '<div class="history-detail"><strong>Total:</strong> ' + formatCurrency(calc.totalAmount) + '</div>';
        html += '<div class="history-detail"><strong>Por persona:</strong> ' + formatCurrency(calc.perPersonTotal) + '</div>';
        html += '</div>';
        html += '</div>';
    });
    
    historyContainer.innerHTML = html;
}

    function clearHistory() {
    if (historyData.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres eliminar todo el historial?')) {
        historyData = [];
        localStorage.removeItem('tipHistory');
        renderHistory();
    }
}