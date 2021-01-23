import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class PieChart extends Component {
  state = {
    pieData: [
      {
        country: "Litfffffffffffff",
        litres: 500,
        subData: [
          { name: "A", value: 200 },
          { name: "B", value: 150 },
          { name: "C", value: 100 },
          { name: "D", value: 50 },
        ],
      },
      {
        country: "Czech Republic",
        litres: 300,
        subData: [
          { name: "A", value: 150 },
          { name: "B", value: 100 },
          { name: "C", value: 50 },
        ],
      },
      {
        country: "Ireland",
        litres: 200,
        subData: [
          { name: "A", value: 110 },
          { name: "B", value: 60 },
          { name: "C", value: 30 },
        ],
      },
      {
        country: "Germany",
        litres: 150,
        subData: [
          { name: "A", value: 80 },
          { name: "B", value: 40 },
          { name: "C", value: 30 },
        ],
      },
      {
        country: "Australia",
        litres: 140,
        subData: [
          { name: "A", value: 90 },
          { name: "B", value: 40 },
          { name: "C", value: 10 },
        ],
      },
      {
        country: "Austria",
        litres: 120,
        subData: [
          { name: "A", value: 60 },
          { name: "B", value: 30 },
          { name: "C", value: 30 },
        ],
      },
    ],
    chart: null,
  };

  pieChart = () => {
    var container = am4core.create("piechart", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "horizontal";

    var chart = container.createChild(am4charts.PieChart);
    chart.align = "left";

    // Title
    var title = chart.titles.create();
    title.text = "Your expense categories";
    title.fontSize = 25;
    title.marginBottom = 30;
    title.marginTop = 30;

    // Responsive
    chart.responsive.enabled = true;
    chart.responsive.rules.push({
      relevant: am4core.ResponsiveBreakpoints.widthM,
      state: function (target, stateId) {
        if (target instanceof am4charts.PieSeries) {
          var state = target.states.create(stateId);

          var labelState = target.labels.template.states.create(stateId);
          labelState.properties.disabled = true;

          var tickState = target.ticks.template.states.create(stateId);
          tickState.properties.disabled = true;
          return state;
        }

        return null;
      },
    });

    //Ticks and labels (/*RESPONSIVE*/)
    // pieSeries.labels.template.disabled = false;
    // pieSeries.ticks.template.disabled = false;

    // Add data
    chart.data = this.state.pieData;

    //Make donut
    chart.innerRadius = am4core.percent(30);

    //Add legend
    chart.legend = new am4charts.Legend();
    chart.legend.valueLabels.template.text = "";
    chart.legend.fontSize = 15;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    //Tighten ticks and tables
    pieSeries.labels.template.paddingTop = 0;
    pieSeries.labels.template.paddingBottom = 0;

    //Make labels fit
    pieSeries.labels.template.maxWidth = 200;
    pieSeries.labels.template.wrap = true;

    //Add center label
    var label = pieSeries.createChild(am4core.Label);
    label.text = "${values.value.sum}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 20;

    pieSeries.slices.template.events.on("hit", function (event) {
      selectSlice(event.target.dataItem);
      closeOtherSlices(event);
    });

    function closeOtherSlices(ev) {
      var series = ev.target.dataItem.component;
      series.slices.each(function (item) {
        if (item.isActive && item !== ev.target) {
          item.isActive = false;
        }
      });
    }

    var chart2 = container.createChild(am4charts.PieChart);
    chart2.width = am4core.percent(30);
    chart2.radius = am4core.percent(90);

    // Add and configure Series
    var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
    pieSeries2.dataFields.value = "value";
    pieSeries2.dataFields.category = "name";
    pieSeries2.slices.template.states.getKey(
      "active"
    ).properties.shiftRadius = 0;
    //pieSeries2.labels.template.radius = am4core.percent(50);
    //pieSeries2.labels.template.inside = true;
    //pieSeries2.labels.template.fill = am4core.color("#ffffff");
    pieSeries2.labels.template.disabled = true;
    pieSeries2.ticks.template.disabled = true;
    pieSeries2.alignLabels = false;
    pieSeries2.events.on("positionchanged", updateLines);

    var interfaceColors = new am4core.InterfaceColorSet();

    var line1 = container.createChild(am4core.Line);
    line1.strokeDasharray = "2,2";
    line1.strokeOpacity = 0.5;
    line1.stroke = interfaceColors.getFor("alternativeBackground");
    line1.isMeasured = false;
    var line2 = container.createChild(am4core.Line);
    line2.strokeDasharray = "2,2";
    line2.strokeOpacity = 0.5;
    line2.stroke = interfaceColors.getFor("alternativeBackground");
    line2.isMeasured = false;

    var selectedSlice;

    function selectSlice(dataItem) {
      selectedSlice = dataItem.slice;

      var fill = selectedSlice.fill;

      var count = dataItem.dataContext.subData.length;
      pieSeries2.colors.list = [];
      for (var i = 0; i < count; i++) {
        pieSeries2.colors.list.push(fill.brighten((i * 2) / count));
      }

      chart2.data = dataItem.dataContext.subData;
      pieSeries2.appear();

      var middleAngle = selectedSlice.middleAngle;
      var firstAngle = pieSeries.slices.getIndex(0).startAngle;
      var animation = pieSeries.animate(
        [
          { property: "startAngle", to: firstAngle - middleAngle },
          { property: "endAngle", to: firstAngle - middleAngle + 360 },
        ],
        600,
        am4core.ease.sinOut
      );
      animation.events.on("animationprogress", updateLines);

      selectedSlice.events.on("transformed", updateLines);

      //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
      //  animation.events.on("animationprogress", updateLines)
    }
    function updateLines() {
      if (selectedSlice) {
        var p11 = {
          x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle),
          y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle),
        };
        var p12 = {
          x:
            selectedSlice.radius *
            am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc),
          y:
            selectedSlice.radius *
            am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc),
        };

        p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
        p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);

        var p21 = { x: 0, y: -pieSeries2.pixelRadius };
        var p22 = { x: 0, y: pieSeries2.pixelRadius };

        p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
        p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);

        line1.x1 = p11.x;
        line1.x2 = p21.x;
        line1.y1 = p11.y;
        line1.y2 = p21.y;

        line2.x1 = p12.x;
        line2.x2 = p22.x;
        line2.y1 = p12.y;
        line2.y2 = p22.y;
      }
    }

    chart.events.on("datavalidated", function () {
      setTimeout(function () {
        selectSlice(pieSeries.dataItems.getIndex(0));
      }, 1000);
    });

    return container;
  };

  componentDidMount() {
    this.setState({ chart: this.pieChart() });
  }

  componentWillUnmount() {
    if (this.state.chart) {
      this.state.chart.dispose();
    }
  }

  render() {
    return <div id="piechart" className="chart"></div>;
  }
}
