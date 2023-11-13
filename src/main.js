document.getElementById('mao-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let arv = parseFloat(document.getElementById('arv').value);
    let repairs = parseFloat(document.getElementById('repairs').value);
    let profitMargin = parseFloat(document.getElementById('profit').value) / 100;

    let mao = arv * (1 - profitMargin) - repairs;
    document.getElementById('result').textContent = `$${mao.toFixed(2)}`;
});
