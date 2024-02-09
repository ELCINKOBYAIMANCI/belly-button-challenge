function panelInfo(id) {
    d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then(function(data) {
        // Extracting metadata for the specific ID
        let metadata = data.metadata;
        let identifier = metadata.find(sample => sample.id.toString() === id);

        // Ensure we found a matching ID
        if (!identifier) {
            console.error('ID not found in dataset');
            return;
        }
        updateDemographicInfo(identifier);

        // Calculate needle position
        let level = identifier.wfreq;
        // Trig to calc meter point
        let degrees = 180 - level * (180 / 9);
        let radius = 0.5;
        let radians = degrees * Math.PI / 180;
        let x = radius * Math.cos(radians);
        let y = radius * Math.sin(radians);

        // Define the needle (triangle) path
        let mainPath = 'M -.0 -0.035 L .0 0.035 L ';
        let pathX = String(x);
        let space = ' ';
        let pathY = String(y);
        let pathEnd = ' Z';
        let path = mainPath.concat(pathX,space,pathY,pathEnd);

        // Define the gauge trace
        let gaugeTrace = {
            domain: { x: [0, 1], y: [0, 1] },
            type: "indicator",
            mode: "gauge",
            value: level,
            gauge: {
                axis: {
                    range: [0, 9],
                    tickmode: 'linear'
                },
                steps: [
                    { range: [0, 1], color: 'rgb(248,243,236)', id: '0-1' },
                    { range: [1, 2], color: 'rgb(244,241,228)', name: '1-2' },
                    { range: [2, 3], color: 'rgb(233,230,201)', name: '2-3' },
                    { range: [3, 4], color: 'rgb(229,232,176)', name: '3-4' },
                    { range: [4, 5], color: 'rgb(213,229,153)', name: '4-5' },
                    { range: [5, 6], color: 'rgb(183,205,143)', name: '5-6' },
                    { range: [6, 7], color: 'rgb(138,192,134)', name: '6-7' },
                    { range: [7, 8], color: 'rgb(137,188,141)', name: '7-8' },
                    { range: [8, 9], color: 'rgb(132,181,137)', name: '8-9' },
                ]
            }
        };

        // Define the gauge layout
        let gaugeLayout = {
            title: "<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week</br>",
            shapes: [{
                type: 'line',
                x0: 0.5,
                y0: 0,
                x1: x + 0.5,
                y1: y + 0.5,
                line: {
                    color: 'red',
                    width: 4
                }
            }],
            xaxis: { visible: true, range: [-1, 1] },
            yaxis: { visible: true, range: [-1, 1] },
            width: 800,
            height: 500

        };
        // Render the plot to the div tag with id "gauge"
        Plotly.newPlot('gauge', [gaugeTrace], gaugeLayout);
    });
}
function updateDemographicInfo(identifier) {
    // Select the demographic info panel
    let infoPanel = d3.select("#sample-metadata");

    // Clear the current demographic info
    infoPanel.html("");

    // Append h5 elements for each key-value pair in the demographic data
    Object.entries(identifier).forEach(([key, value]) => {
        infoPanel.append("h5").text(`${key.toUpperCase()}: ${value}`);
    });
}