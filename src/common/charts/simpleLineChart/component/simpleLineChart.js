import { select } from 'd3';
import React ,{useRef,useEffect} from 'react';
import {line} from "d3";
import PropTypes from 'prop-types';
/**
 * 
 * @param {@author: Bhaskar Mishra} props 
 */
export default function SimpleLineChart(props) {

    const {data}=props;
    const svgRef = useRef();
    useEffect(()=>{
        const svg = select(svgRef.current);
        /**
         * Based on data define the starting position
         * x coordinates & y coordinates 
         */
        const lineChart = line()
        .x((value,idx)=> idx*50)
        .y(value=> 150-value);
        svg.selectAll("path")
        .data([data])
        .join("path")
        .attr("d",value=>lineChart(value))
        .attr("fill","none")
        .attr("stroke","blue");
    },[data]);
    return (
        <React.Fragment>
            <svg ref={svgRef}></svg>
        </React.Fragment>
    );
}

SimpleLineChart.propTypes = {
    data: PropTypes.isRequired
}