import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Item from "./Item";
import "./Dashboard.css";
import Navbar from "./Navbar";

export default function Dashboard(){
    const [salesData, setSalesData] = React.useState({})
    const [stats, setStats] = React.useState({})
    const [year, setYear] = React.useState("current")

    const getMonthlyRevenue = (month, index) => {
        if(year === "current")
            return { month: month, value: Number(salesData.monthly_revenues[index].current_year_revenue) || 0 }
        else
            return { month: month, value: Number(salesData.monthly_revenues[index].last_year_revenue) || 0 }

    }
    let data;
    if (salesData.monthly_revenues && salesData.monthly_revenues.length > 0) {
        data = [
            getMonthlyRevenue('Jan', 0),
            getMonthlyRevenue('Feb', 1),
            getMonthlyRevenue('Mar', 2),
            getMonthlyRevenue('Apr', 3),
            getMonthlyRevenue('May', 4),
            getMonthlyRevenue('Jun', 5),
            getMonthlyRevenue('Jul', 6),
            getMonthlyRevenue('Aug', 7),
            getMonthlyRevenue('Sep', 8),
            getMonthlyRevenue('Oct', 9),
            getMonthlyRevenue('Nov', 10),
            getMonthlyRevenue('Dec', 11),
        ];
    }

      const token = localStorage.getItem('retailerToken');
    React.useEffect(() => {
        fetch("http://127.0.0.1:8000/report/salesReport/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then((data) => {
            setSalesData({...data, monthly_revenues: JSON.parse(data.monthly_revenues)}) // log the object to the console
        })
        .catch((error) => {})
        
        fetch("http://127.0.0.1:8000/order/getStatNumbers/", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then((data) => {
            setStats(data) // log the object to the console
        })
        .catch((error) => {})


    }, []);

    const handleYearChange = (event) => {
        setYear(event.target.value)
    } 
    return (
        <div className="dashboard">
            <Navbar user="retailer" />
            <div className="dashboard-body">
                <div className="dashboard-title">Overview</div>
                <div className="barchart">
                    <div className="barchart-title">Total Revenue</div>
                    <div className="revenue-value">{year === "current" ? salesData.current_year_revenue: salesData.last_year_revenue} ETB</div>
                    <div className="year-selector">
                        <select className="theme-color button-style" onChange={(event) => handleYearChange(event)}>
                            <option value="current">This year</option>
                            <option value="last">Last year</option>
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
                                <div>{salesData.total_sales} ETB</div>
                            </div>
                            <div className="stats theme-color">
                                <div>Orders Completed</div>
                                <div>{salesData.number_of_orders_completed}</div>
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