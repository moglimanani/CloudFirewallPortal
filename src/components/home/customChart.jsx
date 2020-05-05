import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';

const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const chartConfigTemp = {
  type: 'line',
  data: {
    datasets: [
      {
        label: 'Bytes Received',
        backgroundColor: 'rgba(92,193,151,0.5)',
        borderCapStyle: 'round',
        borderColor: 'rgba(92,193,151,0.1)',
        hoverBackgroundColor: 'rgba(92,193,151,0.8)',
        pointRadius: '0',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 }
        ]
      },
      {
        label: 'Bytes Received',
        backgroundColor: 'rgba(92,193,151,0.5)',
        borderCapStyle: 'round',
        borderColor: 'rgba(92,193,151,0.1)',
        hoverBackgroundColor: 'rgba(92,193,151,0.8)',
        pointRadius: '0',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 3 }
        ]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'series',
          gridLines: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            borderDash: [10, 10]
          }
        }
      ]
    },
    chartArea: {
      backgroundColor: 'rgba(0, 0,0, 1)'
    },
    responsive: true
  }
};

const CustomChart = ({ customChartData }) => {
  const chartContainer = useRef(null);
  const chartConfig = chartConfigTemp;
  chartConfig.data.datasets[0].data = customChartData[0];
  chartConfig.data.datasets[1].data = customChartData[1];
  console.log(2222, chartConfig);

  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartConfig, chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  //   const onButtonClick = () => {
  //     const data = [randomInt(), randomInt(), randomInt(), randomInt(), randomInt(), randomInt()];
  //     updateDataset(0, data);
  //   };

  return <canvas ref={chartContainer} width="100vh" />;
};

export default CustomChart;
