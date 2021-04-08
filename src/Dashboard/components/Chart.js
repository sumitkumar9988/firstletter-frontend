import React, {Component} from 'react'
import Chart from "react-apexcharts";

export default class AnaltChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'series1',
                    data: [
                        31,
                        40,
                        28,
                        51,
                        42,
                        109,
                        100
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {},
                stroke: {},
                xaxis: {
                    type: 'datetime',
                    categories: [
                        "2018-09-19T00:00:00.000Z",
                        "2018-09-19T01:30:00.000Z",
                        "2018-09-19T02:30:00.000Z",
                        "2018-09-19T03:30:00.000Z",
                        "2018-09-19T04:30:00.000Z",
                        "2018-09-19T05:30:00.000Z",
                        "2018-09-19T06:30:00.000Z"
                    ]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    }
                }
            }
        };
    }
    render() {
        return (
            <div >
                <div className="pt-20 p-12">
                    <div class="mb-4 lg:mb-20">
                        <h2
                            class="text-center text-2xl lg:text-2xl font-bold text-gray-800 tracking-1px">Your Site visiter
                        </h2>
                    </div>
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        height={350}/>
                </div>
            </div>
        )
    }
}
