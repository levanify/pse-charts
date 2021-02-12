import React from 'react'
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import styled from 'styled-components';
import {Color} from "@amcharts/amcharts4/core";
import { theme } from '../../App';
import {ColumnSeries, XYSeries} from "@amcharts/amcharts4/charts";

am4core.useTheme(am4themes_animated);

type Props = {
  uniqueId: string;
  title: string;
  data: any;
  xAxisLabel: string;
  yAxisLabels: { [key: string]: string };
  format?: string;
};

export const StackedColumnChart = ({ uniqueId, title, data, xAxisLabel, yAxisLabels, format = "#.0a" }: Props) => {
  const chartRef: { current: am4charts.XYChart | null } = React.useRef(null);

  React.useEffect(() => {
    // Create chart instance
    let chart = am4core.create(uniqueId, am4charts.XYChart);

    let chartTitle = chart.titles.create();
    chartTitle.text = title;
    chartTitle.fontSize = '1.2rem';
    chartTitle.fontWeight = 'bold';
    chartTitle.fill = am4core.color(theme.color.primary)

    // Add data
    chart.data = data

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = xAxisLabel;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.cursorTooltipEnabled = false;
    categoryAxis.renderer.minGridDistance = 0;

    // Config x-axis label
    let label = categoryAxis.renderer.labels.template;
    label.wrap = true;
    label.maxWidth = 120;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.min = 0;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.numberFormatter.bigNumberPrefixes = [
      { "number": 1e+3, "suffix": "K" },
      { "number": 1e+6, "suffix": "M" },
      { "number": 1e+9, "suffix": "B" }
    ];
    valueAxis.numberFormatter.numberFormat = format;

    // Create series
    function createSeries(field: string, name: string) {
      // Set up series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.name = name;
      series.dataFields.valueY = field;
      series.dataFields.categoryX = xAxisLabel;
      series.sequencedInterpolation = true;

      series.columns.template.tooltipY = 0;

      if (series.tooltip) {
        // Prevent cross-fading of tooltips
        series.tooltip.defaultState.transitionDuration = 0;
        series.tooltip.hiddenState.transitionDuration = 0;
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color("#fff");
        series.tooltip.label.fill = am4core.color("#00");
      }

      // Add label
      let labelBullet = series.bullets.push(new am4charts.LabelBullet());
      labelBullet.label.text = "{valueY}";
      labelBullet.fontSize = '0.7rem'
      labelBullet.locationY = 0.5;
      labelBullet.label.hideOversized = true;

      // Make it stacked
      series.stacked = true;

      return series;
    }

    // eslint-disable-next-line array-callback-return
    Object.entries(yAxisLabels).map(([key, value]) => {
      createSeries(key, value)
    })

    let text = "[bold]{categoryX}[/]\n" +
      "[bold]Total[/]: {total} \n";
    chart.series.each(function(item: XYSeries) {
      text += "[" + (item.stroke as Color).hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
    });

    chart.series.each(function(item: XYSeries) {
      (item as ColumnSeries).columns.template.tooltipText = text
    });

    // Legend
    chart.legend = new am4charts.Legend();

    // Save chart to ref
    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, [data, format, title, uniqueId, xAxisLabel, yAxisLabels]);

  return (
    <Chart>
      <div id={uniqueId} style={{ width: '100%', height: '100%' }} />
      <Attribution />
    </Chart>
  );
}

const Chart = styled.div`
  position: relative;
  font-size: 14px;
  width: 100%;
  height: 500px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px dotted #cbcbcb;
`;

const Attribution = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 0;
  height: 20px;
  width: 60px;
  background-color: white;
`;
