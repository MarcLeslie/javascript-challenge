// from data.js

var tableData = data;

var tbody = d3.select("tbody");

//NEED A FILTER BUTTON

data.forEach((UFO) => {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


