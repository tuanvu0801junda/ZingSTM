import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from "variables/charts";

export default function TopSongLineChart(props) {
	// props.songId1, props.songId2, props.songId3
	const [state, setState] = useState({
		chartData: [],
		chartOptions: {},
	});

	useEffect(() => {
		getChartData();
	}, []);

	const getChartData = async () => {
		const song1 = await getSongViewInfo(props.songId1);
		const song2 = await getSongViewInfo(props.songId2);
		const song3 = await getSongViewInfo(props.songId3);
		var chartData;

		if (song3 === null) {
			chartData = [
				{
					name: song1.title,
					data: song1.viewArr.reverse(),
				},
				{
					name: song2.title,
					data: song2.viewArr.reverse(),
				},
			]
		} else if (song2 === null) {
			chartData = [
				{
					name: song1.title,
					data: song1.viewArr.reverse(),
				},
			]
		} else if (song1 === null) {
			chartData = []
		} else {
			chartData = [
				{
					name: song1.title,
					data: song1.viewArr.reverse(),
				},
				{
					name: song2.title,
					data: song2.viewArr.reverse(),
				},
				{
					name: song3.title,
					data: song3.viewArr.reverse(),
				},
			]
		}

		setState({
			chartData: [...chartData],
			chartOptions: lineChartOptions,
		});
	}

	const getSongViewInfo = async (songId) => {
		const data = {
			songId: songId,
		}

		const res = await axios.post("api/getListenHistory", data);
		if (res.data.status !== 200) return(null)
		else return(res.data);
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
