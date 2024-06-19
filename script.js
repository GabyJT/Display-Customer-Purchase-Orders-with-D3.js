// U54107257
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the container div
    const container = d3.select("#data-container");

    // Define some sample data
    const data = [1, 2, 3, 4, 5];

    // Create div elements for each data point
    container.selectAll(".data-point")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "data-point")
        .text(d => `Data ${d}`)
        .on("mouseover", function() {
            // Change the background color to firebrick on hover
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            // Revert the background color to lightblue when the mouse moves away
            d3.select(this).style("background-color", "lightblue");
        });
});