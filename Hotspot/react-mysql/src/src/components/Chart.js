import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
        constructor(){
            super(props);
            this.state={
                charData:{
                    labels:
                }
            }
        }

        render(){
        return(
            <div className="chart">
                <Bar
                    data={data}
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