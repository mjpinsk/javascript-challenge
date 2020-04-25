// from data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the tableData
console.log(tableData);

// Create a function to display the data
// Use Arrow Function inside the function
function displayData(someData){
  someData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

displayData(tableData);

  var button = d3.select("#filter-btn");

  button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    // clear the table
    var tbody = d3.select("tbody");
          tbody.html("");

    // filter the data
    var filteredData = tableData.filter(ufoData => ufoData.datetime === inputValue);
        displayData(filteredData);
    
    // console.log the filtered data
    console.log(filteredData);
  });