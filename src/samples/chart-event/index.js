import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Charts);

const chartConfigs = {
  type: 'Pie2D',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'You will see a notification here on rotating the chart'
    };

    this.rotationStart = this.rotationStart.bind(this);
    this.rotationEnd = this.rotationEnd.bind(this);
  }

  rotationStart() {
    this.setState({
      message: 'Chart is rotating'
    });
  }

  rotationEnd() {
    this.setState({
      message: 'Chart has stopped rotating'
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-rotationStart={this.rotationStart} fcEvent-rotationEnd={this.rotationEnd}/>
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
      </div>
    )
  }
}

export default Chart;
