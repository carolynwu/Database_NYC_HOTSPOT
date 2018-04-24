import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
        constructor(props){
            super(props);
            this.state={
                chartData:{
                    labels:["Booklyn","Bronx", "Manhattan","Queens"],
                    datasets:[
                        {
                            label:"poulation",
                            data:[
                                100,
                                200,
                                600,
                                500
                            ],
                            backgroundColor:[
                                'rgba(255,105,145,0.6)',
                                'rgba(155,100,210,0.6)',
                                'rgba(90,178,255,0.6)',
                                'rgba(240,134,67,0.6)'
                                ]
                        }
                    ]
                }
            }
        }

        render(){
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    opitions={{
                        maintainAspectRation:false
                    }}
                    />
            </div>
        )
    }
}
export default Chart;