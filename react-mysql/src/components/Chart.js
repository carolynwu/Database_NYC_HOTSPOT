import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
        constructor(props){
            super(props);
            this.state={
                chartData:{
                    labels:["Booklyn","Queens", "Manhattan","Bronx","staten_island"],
                    datasets:[
                        {
                            label:"wifi_hotspot_number",
                            data:[
                                707,
                                504,
                                1438,
                                270,
                                95
                            ],
                            backgroundColor:[
                                'rgba(255,105,145,0.6)',
                                'rgba(155,100,210,0.6)',
                                'rgba(90,178,255,0.6)',
                                'rgba(240,134,67,0.6)',
                                'rgba(75,192,192,0.6)'
                                ]
                        }
                    ]
                }
            }
        }

    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:"right"
    }
        render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Bar Graph",
                            fontSize:25,
                            text_align: "center"
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },

                        responsive: true
                    }}
                    />
                <br/>
                <br/>
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Line Graph",
                            fontSize:25,
                            text_align: "center"
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },

                        responsive: true
                    }}
                />
                    <br/>
                <br/>
                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:"Pie Graph",
                            fontSize:25,
                            text_align: "center"
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        },
                        responsive: true
                    }}
                />
            </div>
        )
    }
}
export default Chart;