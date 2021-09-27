import React, { Component } from 'react';


export default class D3Component extends Component {
    /**
     * Base d3 component
     *
     * Required Props:
     *   rendervis: a function for running the d3 code
     *   name: name of the visualization
     *   data: JSON data
     */
    constructor(props) {
        super(props);
        let vis_props = { ...this.props };
        delete vis_props.rendervis;
        this.state = { "vis_props": vis_props };
    }

    componentDidMount() {
        this.props.rendervis(this.state.vis_props);
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * I'm a little iffy on whether we need this one
         */
        if (prevProps.data != this.props.data) {
            this.props.rendervis(this.state.vis_props);
        }
    }

    render() {
        const vis_name = `d3 vis ${this.props.name}`;

        return (
            <div className={vis_name} />
        )
    }
}