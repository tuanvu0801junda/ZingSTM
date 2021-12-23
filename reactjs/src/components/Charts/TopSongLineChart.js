import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";

export default function TopSongLineChart(props) {
	const [state, setState] = useState({
		chartData: [],
		chartOptions: {},
	});

	useEffect(() => {
		setState({
			chartData: lineChartData,
			chartOptions: lineChartOptions,
		});
	}, []);

	const getChartData = async () => {
		
	}

	return (
		<ReactApexChart
			options={state.chartOptions}
			series={state.chartData}
			type="area"
			width="100%"
			height="100%"
		/>
	);
}
