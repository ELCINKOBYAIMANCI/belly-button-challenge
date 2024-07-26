# Belly Button Biodiversity Dashboard

## Objective

This project aims to visualize the Belly Button Biodiversity dataset using Plotly and D3.js, allowing users to explore the diverse microbial life that colonizes human navels.

## Requirements

### Data Integration

- Utilize D3.js to load data from the `samples.json` file.

### Visualization Components

#### Horizontal Bar Chart

- Implement a dropdown menu for selecting an individual's ID.
- Display the top 10 OTUs found in the selected individual as a horizontal bar chart:
  - `sample_values` for bar lengths
  - `otu_ids` for bar labels
  - `otu_labels` for hovertext

#### Bubble Chart

- Create a bubble chart for each sample:
  - X values: `otu_ids`
  - Y values: `sample_values`
  - Marker size: `sample_values`
  - Marker colors: `otu_ids`
  - Text values: `otu_labels`

#### Demographic Information Panel

- Display the selected individual's demographic information as key-value pairs.

#### Interactive Dashboard

- Update visualizations and demographic information based on the selected sample.

### Advanced Challenge (Optional)

#### Gauge Chart

- Incorporate a Gauge Chart to show the weekly washing frequency of the selected individual.
- Modify the chart to accommodate values from 0 to 9.
- Update the gauge chart when a new sample is selected.

## Deployment

Deploy your dashboard to a free hosting service, such as GitHub Pages, and provide links to the deployment and your GitHub repository.

## Setup

To set up this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser to view the dashboard.


ajhsdjksahdkajhdadljasdlkasdasdasdsa