// import "./styles.css";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


const DonutChart = (props) => {
     
    const data = [{name:props.title, value:props.value}]
    return (
        <React.Fragment>       
            <div className="pie-chart">
                <ResponsiveContainer width="100%" height={220}>

                <PieChart >                  
                    <Pie
                        data={data}
                        cx={120}
                        cy={95}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                                    >
                                
                            {data.map((entry, index) => (
                            //   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />                    
                                <Cell key={`cell-${index}`} fill={props.singleColor}>                              
                                </Cell>
                            ))}
                    </Pie>                
                </PieChart>
                 </ResponsiveContainer>
                <div className="rotate-back">
                    <text  x={0} y={0} dy={0} textAnchor="middle" fill='#333333'>
                        {props.value}{props.valueLabel}
                    </text>
                </div>
                
            </div>
             
            <div className="chart-label">
                <h6>{props.title}</h6>
            </div>
           
        </React.Fragment>
  );
}


export default DonutChart;