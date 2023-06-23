import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Item from "./Item";
import "./Dashboard.css";
import Navbar from "./Navbar";

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
        <div className="dashboard">
            <Navbar user="retailer" />
            <div className="dashboard-body">
                <div className="dashboard-title">Overview</div>
                <div className="barchart">
                    <div className="barchart-title">Total Revenue</div>
                    <div className="revenue-value">$980,273.00</div>
                    <div className="year-selector">
                        <select className="theme-color">
                            <option value="2023">This year</option>
                            <option value="2022">Last year</option>
                        </select>
                    </div>
                    <BarChart width={1100} height={330} data={data}>
                        <XAxis dataKey="month" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#000" radius={[13, 13, 0, 0]} barSize={40}/>
                    </BarChart>
                </div>
                <div className="product-stats-and-overview">
                    <div className="product-stats">
                        <div className="total">
                            <div className="stats theme-color">
                                <div>Total Sales</div>
                                <div>$300K</div>
                            </div>
                            <div className="stats theme-color">
                                <div>Orders Completed</div>
                                <div>90,823</div>
                            </div>
                        </div>
                        <div className="top">Top products</div>
                        <div className="top-products">
                            <Item user="retaier" />
                            <Item user="retailer" />
                            <Item user="retailer" />
                            <Item user="retailer" />
                            <Item user="retailer" />
                        </div>                
                    </div>
                    <div className="stats-overview">
                        <div className="stats-overview-title">Stats Overview</div>
                        <div className="stats-overview-description">Information about product sales</div>
                        <div>
                            <div>Women</div>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "75% "}}></div>
                            </div>
                            <div className="percentage">75%</div>
                            <div>Men</div>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "65% "}}></div>
                        </div>
                        <div className="percentage">65%</div>
                        <div>Kids</div>
                            <div className="progress-bar">
                                <div className="progress" style={{width: "35% "}}></div>
                        </div>
                        <div className="percentage">35%</div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

//style for progressbar and progress 