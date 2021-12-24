import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";

export default function TopSongLineChart(props) {
	// props.songId1, props.songId2, props.songId3
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
		var data = {
			songId: props.songId1,
		}
		var res;

		res = await axios.post("");
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
