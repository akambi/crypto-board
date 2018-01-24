import * as React from 'react';
const ReactHighstock = require('react-highcharts/ReactHighstock.src');

interface CoinChartProps {
  name: string;
  seriesOptions: { name?: string; data: number[][] }[];
}

export default function CoinChart(props: CoinChartProps) {
    if (!props || !props.seriesOptions || !props.seriesOptions.length) {
     return <span/>;
    }

    const config = {
        rangeSelector: {
            selected: 1
        },
        plotOptions: {
            series: {
                showInNavigator: true
            }
        },

        tooltip: {
            pointFormat: `<span style="color:{series.color}">{series.name}</span>: <b>$ {point.y}</b>
             <br/>`,
            valueDecimals: 2,
            split: true
        },

        series: props.seriesOptions,
        title: {
          text: props.name + ' Price'
        }
    };
    return <ReactHighstock isPureConfig={true} ref={() => 'chart'} config={config} domProps={{id: 'chartId'}} />;
}
