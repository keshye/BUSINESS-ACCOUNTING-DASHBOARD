function calculate() {
    // Get the input values
    const productName = document.getElementById('productName').value;
    const quality = parseFloat(document.getElementById('quality').value);
    const price = parseFloat(document.getElementById('price').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;

    // Calculate Total Revenue
    const totalRevenue = quality * price;

    // Calculate Profit and Loss
    let profit = totalRevenue - expenses;
    let loss = 0;

    if (profit < 0) {
        loss = -profit;
        profit = 0;
    }

    // Calculate Tax
    const tax = totalRevenue * taxRate;

    // Calculate Net Profit After Tax
    const netProfit = profit - tax;

    // Display Results
    document.getElementById('totalRevenue').innerText = totalRevenue.toFixed(2);
    document.getElementById('profit').innerText = profit.toFixed(2);
    document.getElementById('loss').innerText = loss.toFixed(2);
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('netProfit').innerText = netProfit.toFixed(2);
}
