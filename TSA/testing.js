phi_1 = 0.5;
phi_2 = 0.3;
rho_1 = phi_1 / (1 - phi_2)
const rho_2 = phi_1 ** 2 / (1 - phi_2)
var rho = [rho_1, rho_2];
var k_d = [1, 2];



function acf(phi1, phi2) {
    for (k = 3; k < 51; k++) {
        rho_k = 0;
        rho_k = (phi1 * rho[k - 2]) + (phi2 * (rho[k - 3]));
        rho.push(rho_k);
        k_d.push(k);


    }
    return rho;
}
acf(phi_1, phi_2)
console.log(rho);








// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data


// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


// Now I can use this dataset:
function makeviz(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
        .domain(d3.extent(k_d))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain(d3.extent(rho))
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(k_d)
            .y(rho)
        )

}

makeviz();

console.log(k_d);