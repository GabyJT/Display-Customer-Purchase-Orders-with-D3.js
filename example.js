// U54107257
document.addEventListener('DOMContentLoaded', main);

function main() {
    console.log('DOM fully loaded and parsed');

    // Load data from the CSV file
    d3.csv('data/purchase_orders.csv').then(function(data) {
        console.log('Data loaded successfully:', data);

        // Select the unordered list element
        var ul = d3.select('#purchaseOrders_storage');

        // Bind data to the list items and create new list items for each data entry
        ul.selectAll('li')
            .data(data)
            .enter()
            .append('li')
            .text(d => `Customer ${d.customerName} - Order #${d.orderId}: $${d.purchaseAmount}`);
    }).catch(error => {
        alert('Sorry! There was an error retrieving the data!');
        console.error('Error loading the CSV file:', error);
    });
}
