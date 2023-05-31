import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Item from "./Item";


export default function Dashboard(){
    const data = [
        { month: 'Jan', value: 200 },
        { month: 'Feb', value: 300 },
        { month: 'Mar', value: 600 },
        { month: 'Apr', value: 200 },
        { month: 'May', value: 400 },
        { month: 'Jun', value: 600 },
        { month: 'Jul', value: 100 },
        { month: 'Aug', value: 800 },
        { month: 'Sep', value: 300 },
        { month: 'Oct', value: 500 },
        { month: 'Nov', value: 700 },
        { month: 'Dec', value: 500 },
      ];
    return (
        <>
            {/* <SellerNavBar /> */}
            <h1>Overview</h1>
            <div>
                <p>Total Revenue</p>
                <p>$980,273.00</p>
                <select>
                    <option value="2023">This year</option>
                    <option value="2022">Last year</option>
                </select>

                <BarChart width={1200} height={500} data={data}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
            <div>
                <div>
                    <span>Total Sales</span>
                    <span>100,345</span>
                </div>
                 <div>
                    <span>Total Made</span>
                    <span>$300K</span>
                </div>
                 <div>
                    <span>Total Sales</span>
                    <span>100,345</span>
                </div>
                 <div>
                    <span>Orders Completed</span>
                    <span>90,823</span>
                </div>
                <div>Top products</div>
                <Item user="retaier" />
                <Item user="retailer" />                
                <Item user="retailer" />                
                <Item user="retailer" />                
            </div>
            <div>
                <h3>Stats Overview</h3>
                <p>Information about  product sales</p>
                <div>
                    <p>Women</p>
                    <div className="progress-bar">
                        <div className="progress" style={{width: "75% "}}></div>
                    </div>
                    <p>75%</p>
                    <p>Men</p>
                    <div className="progress-bar">
                        <div className="progress" style={{width: "65% "}}></div>
                  </div>
                  <p>65%</p>
                  <p>Kids</p>
                    <div className="progress-bar">
                        <div className="progress" style={{width: "35% "}}></div>
                  </div>
                  <p>35%</p>

                </div>
            </div>

        </>
        
    )
}

//style for progressbar and progress 

// .progress-bar {
//     width: 300px;
//     height: 20px;
//     background-color: #ddd;
//     border-radius: 10px;
//   }
  
//   .progress {
//     height: 100%;
//     background-color: #4CAF50;
//     border-radius: 10px;
//   }