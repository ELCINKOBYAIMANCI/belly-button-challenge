
## Belly Button Biodiversity Dashboard Assignment

##Objective
Your goal is to utilize Plotly and D3.js to visualize the dataset in a user-friendly manner, enabling users to explore the diversity of microbes in human belly buttons.

##Requirements

Data Integration
-Employ the D3 library to fetch data from the samples.json file.

Visualization Components
-Horizontal Bar Chart
-Implement a dropdown menu for selecting an individual's ID.
-Display the top 10 OTUs found in the selected individual as a horizontal bar chart.
-sample_values should represent the bar lengths.
-otu_ids should serve as the bar labels.
-otu_labels should be shown as hovertext.
-Bubble Chart
-Create a bubble chart to represent each sample.
-X-axis values: otu_ids
-Y-axis values: sample_values
-Marker size: sample_values
-Marker colors: otu_ids
-Text values: otu_labels
-Demographic Information Panel
-Show the selected individual's demographic information.
-Display each demographic detail as a key-value pair.
-Interactive Dashboard
-Ensure the visualizations and demographic information update in response to the selection of a new sample.

##Advanced Challenge (Optional)
Gauge Chart
-Integrate a Gauge Chart to depict the weekly washing frequency of the selected individual.
-Adapt the gauge chart to represent values from 0 to 9.
-Ensure the gauge chart updates with the selection of a new sample.

Deployment
-Deploy your dashboard to a free hosting service, such as GitHub Pages.
