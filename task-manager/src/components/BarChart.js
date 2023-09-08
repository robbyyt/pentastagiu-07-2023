import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const mockData = [
  { label: "A", value: 10 },
  { label: "B", value: 20 },
  { label: "C", value: 15 },
  { label: "D", value: 5 },
  { label: "E", value: 25 },
];

const BarChart = ({ data = mockData }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Define the dimensions and margins for the chart
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Select the SVG container using D3 and set its dimensions
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales for x and y axes
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height, 0]);

    // Create and append the bars to the chart
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.value));

    // Create and append x and y axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    svg.append("g").attr("class", "y-axis").call(yAxis);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BarChart;
