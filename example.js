// U54107257
document.addEventListener('DOMContentLoaded', main);

function main() {
    // d3 code goes here
    d3.dsv('data/purchase_orders.csv').then(function(data) {
        // Select the unordered list element
        var ul = d3.select('#purchaseOrders_list');

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
