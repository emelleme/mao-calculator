document.addEventListener('htmx:configRequest', (event) => {
    if (event.detail.path === '/calculate-mao') {
        event.preventDefault();
        // Add your compound interest calculation logic here
      let arv = parseFloat(document.getElementById('arv').value);
      let repairs = parseFloat(document.getElementById('repairs').value);
      let profitMargin = parseFloat(document.getElementById('profit').value) / 100;

      let mao = arv * (1 - profitMargin) - repairs;
      // document.getElementById('result').textContent = `$${mao.toFixed(2)}`;
        htmx.trigger("#mao-result", "htmx:afterRequest", {result: `$${mao.toFixed(2)}`});
        
    }
    // Handle other calculator logic similarly
    if(event.detail.path === '/calculate-compound-interest') {
      event.preventDefault();
      const principal = parseFloat(document.getElementById('principal').value);
      const rate = parseFloat(document.getElementById('rate').value);
      const time = parseFloat(document.getElementById('time').value);
      const compound = parseInt(document.getElementById('compound').value);

      const amount = principal * Math.pow((1 + (rate / 100) / compound), compound * time);
      const interest = amount - principal;

      // document.getElementById('result').textContent = `$${amount.toFixed(2)}, Interest: $${interest.toFixed(2)}`;
      htmx.trigger("#ci-result", "htmx:afterRequest", {result: `$${amount.toFixed(2)}, Interest: $${interest.toFixed(2)}`});
    }
});

document.querySelector('#mao-result').addEventListener('htmx:afterRequest', (event) => {

    // Access passed data
    let result =event.detail.result; // Logs 'test'
    document.querySelector('#mao-result').innerHTML = result;
  
});

document.querySelector('#ci-result').addEventListener('htmx:afterRequest', (event) => {

    // Access passed data
    let result =event.detail.result; // Logs 'test'
    document.querySelector('#ci-result').innerHTML = result;
  
});