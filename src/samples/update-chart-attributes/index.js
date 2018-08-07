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
  type: 'column2d',
  width: '100%',
  height: '80%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(JSON.stringify(chartConfigs));

    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
    this.resetChart = this.resetChart.bind(this);
  }

  changeBackgroundColor() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.bgColor = '#efefef';
    this.setState({
      dataSource: prevDs,
    });
  }

  changeCaptionTextAlignment() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.captionAlignment = 'left';
    this.setState({
      dataSource: prevDs,
    });
  }

  resetChart() {
    this.setState({
      dataSource: JSON.parse(JSON.stringify(chartConfigs.dataSource)),
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <center>
          <button className="btn btn-custom" onClick={this.changeBackgroundColor}>Change Background</button>
          <button className="btn btn-custom" onClick={this.changeCaptionTextAlignment}>Change Caption Alignment</button>
          <button className="btn btn-red" onClick={this.resetChart}>Reset</button>
        </center>
      </div>
    );
  }
}

export default Chart;
