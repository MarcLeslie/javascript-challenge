// from data.js

var tableData = data;
var tbody = d3.select("tbody");

//NEED A FILTER BUTTON



var button = d3.select("#filter-btn"); 
var form = d3.select("#datetime"); 

button.on("click" , runEnter); 
form.on("submit" , runEnter); 

// var tbody = d3.select("tbody"); //DOES THIS GO HERE?????

function runEnter () {    //WHEN YOU CLICK SUBMIT, DO THE FOLLOWING...
  d3.event.preventDefault();    //PREVENT PAGE FROM REFRESHING
  var inputElement = d3.select("#datetime"); 
  var inputValue = inputElement.property("value"); 
  
  console.log(`The input value is: ${inputValue}`); 
  
  console.log("The next thing should be tableData unfiltered"); 
  console.log({tableData}); 

  var filteredData = tableData.filter(x => x.datetime === inputValue);

  console.log("The next thing should be tableData filtered"); 
  console.log(filteredData); 
}; 


data.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
