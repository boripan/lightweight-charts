function generateData() {
	var res = [];
	var time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (var i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}

	return res;
}

// eslint-disable-next-line no-unused-vars
function runTestCase(container) {
	var chart = LightweightCharts.createChart(container, {
		priceScale: {
			mode: LightweightCharts.PriceScaleMode.Percentage,
		},
	});

	var firstSeries = chart.addLineSeries({
		baseLineVisible: true,
		baseLineWidth: 3,
		baseLineColor: '#1215BE',
		baseLineStyle: LightweightCharts.LineStyle.LargeDashed,
	});

	firstSeries.setData(generateData());
}
