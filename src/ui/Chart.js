import React, { useState, useEffect } from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

const graphContainer = React.createRef();

const Chart = ({ height }) => {
  const [graphWidth, setGraphWidth] = useState(300);
  const [data, setData] = useState([]);  

  useEffect(() => {
    function updateWidth() {            
      setGraphWidth(graphContainer.current ? graphContainer.current.offsetWidth : 300)
    }
    // Fake API
    function makeData() {
      const temp = [];
      for (let x=0; x<10; x++) {
        temp.push(
          {x, y: Math.random()}
        )
      }
      setData(temp);
    }

    window.addEventListener("resize", updateWidth)
    updateWidth();
    makeData();
  }, [])
  return (
    <div className="App" ref={graphContainer}>
      <XYPlot height={height || 400} width={graphWidth}>
        <XAxis title="" />
        <YAxis title="" />
        <LineSeries data={data} color={'#165fba'} curve={'curveMonotoneX'}/>
      </XYPlot>
    </div>
  )
}

export default Chart
