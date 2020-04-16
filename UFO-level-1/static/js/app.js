// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the tableData
console.log(tableData);

// Use Arrow Function
tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });