// import "./styles.css";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DonutChart = (props) => {
     
    const data = [{name:props.title, value:props.value}]
    console.log(props.value,"props")
    return (
        <React.Fragment>       
            <div className="pie-chart">                
                <PieChart width={300} height={240}>                  
                    <Pie
                        data={data}
                        cx={120}
                        cy={95}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label="value"
                                    >
                                
                            {data.map((entry, index) => (
                            //   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />                    
                                <Cell key={`cell-${index}`} fill={props.singleColor}>                              
                                </Cell>
                            ))}
                    </Pie>                
                </PieChart>
                <div className="rotate-back">
                    <text  x={0} y={0} dy={0} textAnchor="middle" fill='#333333'>
                        {props.value}
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