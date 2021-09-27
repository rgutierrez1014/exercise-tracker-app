import React, { Component } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import app_config from '../../config';
import D3Component from '../shared/D3Component';


const render_exercise_over_time = (props) => {
    // default args
    let name = props.name,
        //data = props.data,
        config = props.config;

    // additional args

    let d3_container = `.${name}`;
    let d3_component_children = `${d3_container} > *`;

    d3.select(d3_component_children).remove();

    // svg layout
    const margin = { top: 30, right: 20, bottom: 30, left: 20 };
    const width = config.width - margin.left - margin.right;
    const height = config.height - margin.top - margin.bottom;
    let svg = d3.select(d3_container).append('svg')
        .attr("viewBox", [0, 0, width, height])
        .attr("preserveAspectRatio", "xMidYMid meet");

    /* Initialize tooltip */
    let tip = d3Tip()
        .attr('class', `d3-tip d3-x-tip`)
        .html(d => `<strong>${d3.timeFormat("%b %d")(d.date)}: ${d.description} (${d.duration})</strong>`)
        .direction('ne')
        .offset(() => [40, 2]);
    svg.call(tip);

    let data_pretty = [];
    d3.json(`${app_config.api_base_url.slice(0, -1)}/exercises`)
        .then(data => {
            // formatting
            data.map(ex => {
                if (ex.username == 'robert') {
                    data_pretty.push({
                        description: ex.description,
                        duration: ex.duration,
                        date: d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ")(ex.date)
                    })
                }
            });

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
                .domain(d3.extent(data_pretty, d => d.date))
                .range([margin.left, width - margin.right]);
            svg.append("g")
                .attr("transform", `translate(0,${height-margin.bottom})`)
                .call(d3.axisBottom(x)
                    .ticks(d3.timeDay.every(3))
                    .tickFormat(t => d3.timeFormat("%b %d")(t)));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, d3.max(data_pretty, d => d.duration)])
                .range([height - margin.bottom, margin.top]);
            svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y));

            // Add the line
            svg
                .append("path")
                .datum(data_pretty)
                .attr("fill", "none")
                .attr("stroke", "#69b3a2")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(d => x(d.date))
                    .y(d => y(d.duration))
                );

            // Add the points
            svg
                .append("g")
                .selectAll("dot")
                .data(data_pretty)
                .join("circle")
                    .attr("cx", d => x(d.date))
                    .attr("cy", d => y(d.duration))
                    .attr("r", 4)
                    .attr("fill", "#69b3a2")
                .on("mouseover", (e, d) => {
                    d3.select(e.target).attr('r', 5);
                    tip.show(d, e.target);
                })
                .on("mouseout", (e, d) => {
                    d3.select(e.target).attr('r', 4);
                    tip.hide(d);
                });
        });
}

class ExerciseOverTime extends Component {
    render() {
        const d3_props = {
            name: this.props.name,
            rendervis: render_exercise_over_time,
            config: {
                width: 640,
                height: 480
            }
        }
        return (
            <D3Component {...d3_props} />
        );
    }
}

export default ExerciseOverTime;