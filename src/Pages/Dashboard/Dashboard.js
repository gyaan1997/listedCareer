import React from 'react'
import "./dashboard.scss"
import Activities from '../../Components/Activities'
import TopProducts from '../../Components/TopProducts'
import Schedule from '../../Components/Schedule'
import Header from '../../Components/Header'

import Revenue from "../../Images/revenue.png"
import Transaction from "../../Images/transaction.png"
import Transactions from "../../Images/transactions.png"
import Like from "../../Images/like.png"
import User from "../../Images/user.png"
import Dash from "../../Images/Dashboard.png"
import Schedules from "../../Images/schedules.png"
import Users from "../../Images/users.png"
import Settings from "../../Images/settings.png"

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="left">
                <div className="top">
                    <h2>Board.</h2>
                    <ul className='items'>
                        <li className='active'>

                            <img src={Dash} alt="dash"></img>
                            <h4>Dashboard</h4>

                        </li>
                        <li>
                            <img src={Transactions} alt="dash"></img>
                            <h4>Transactions</h4>
                        </li>
                        <li>
                            <img src={Schedules} alt="schedules"></img>
                            <h4>Schedules</h4>
                        </li>
                        <li>
                            <img src={Users} alt="users"></img>
                            <h4>Users</h4>
                        </li>
                        <li>
                            <img src={Settings} alt="settings"></img>

                            <h4>Setting</h4>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <span>Help</span>
                    <span>Contact Us</span>
                </div>
            </div>
            <div className="right">
                <Header />
                <div className="stats">
                    <div className="item card1">

                        <div>
                            <img style={{
                                width: "26.4px",
                                height: "24px",
                                marginTop: "20px",
                                color: "#000",
                                marginLeft: "210px"
                            }} src={Revenue} alt="Revenue"></img>
                        </div>
                        <div className='heading'>Total Revenues</div>


                        <span>$2,129,430</span>
                    </div>

                    <div className="item card2">
                        <div>
                            <img style={{
                                width: "20.8px",
                                height: "24px",
                                marginTop: "20px",
                                color: "#000",
                                marginLeft: "210px"
                            }} src={Transaction} alt="Revenue"></img>
                        </div>
                        <div className='heading'>Total Transactions</div>


                        <span>1,520</span>
                    </div>
                    <div className="item card3">
                        <div>
                            <img style={{
                                width: "23.3px",
                                height: "24px",
                                marginTop: "20px",
                                color: "#000",
                                marginLeft: "210px"
                            }} src={Like} alt="Revenue"></img>
                        </div>
                        <div className='heading'>Total Likes</div>


                        <span>9,721</span>
                    </div>
                    <div className="item card4">
                        <div>
                            <img style={{
                                width: "36.8px",
                                height: "24px",
                                marginTop: "20px",
                                color: "#000",
                                marginLeft: "200px"
                            }} src={User} alt="Revenue"></img>
                        </div>
                        <div className='heading'>Total Users</div>


                        <span>892</span>
                    </div>
                </div>
                <div className="chart">
                    <Activities />
                </div>
                <div className="topProdsSchedule">
                    <div className="section1">
                        <TopProducts />
                    </div>
                    <div className="section2">
                        <Schedule />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard