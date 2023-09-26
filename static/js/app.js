// // Get the url (idea from class activity solution)

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Load the data from the JSON file using D3.js
d3.json(url).then(data => {
  let otuIds = data.names;
  let sampleValues = data.samples;

  // Create the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  dropdownMenu.selectAll("option")
    .data(otuIds)
    .enter()
    .append("option")
    .text(d => d);

  // Create a custom function to update the bar chart and bubble chart
//   function charts(selectedOTU) {
   
// // Get the top 10 OTU IDs, sample values, and OTU labels


});