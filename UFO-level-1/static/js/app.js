var tableData = data;
var tbody = d3.select("tbody");  //THIS BRINGS IN ALL THE DATA

data.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {    //WHEN YOU CLICK SUBMIT, DO THE FOLLOWING...
  d3.event.preventDefault();    //PREVENT PAGE FROM REFRESHING
  var inputElement = d3.select("#datetime"); // 99% sure that datetime is correct here
  var inputValue = inputElement.property("value");

  console.log(`The input value is: ${inputValue}`); // THAT THIS SHOWS THE DATE YOU ARE ENTERING MEANS IT IS WORKING 

  // console.log("The next thing should be tableData unfiltered"); 
  console.log({ tableData });

  var filteredData = tableData.filter(x => x.datetime === inputValue);

  // console.log("The next thing should be tableData filtered"); 
  console.log(filteredData); //THIS DOES SHOW THE FILTERED DATA

  tbody.html(""); //CLEAR 

  filteredData.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

var refreshButton = d3.select("#refresh-btn");
refreshButton.on("click", runClearRefresh);
function runClearRefresh() {
  window.location.reload();
  return false();
};



