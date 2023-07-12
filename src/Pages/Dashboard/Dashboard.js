import React from 'react'
import "./dashboard.scss"
import Activities from '../../Components/Activities'
import TopProducts from '../../Components/TopProducts'
import Schedule from '../../Components/Schedule'
function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="left">
                <div className="top">
                    <h2>Board.</h2>
                    <ul className='items'>
                        <li>
                            <h4>Dashboard</h4>
                        </li>
                        <li>
                            <h4>Transaction</h4>
                        </li>
                        <li>
                            <h4>Schedules</h4>
                        </li>
                        <li>
                            <h4>User</h4>
                        </li>
                        <li>
                            <h4>Setting</h4>
                        </li>
                    </ul>
                </div>
                <div className="bottom"></div>
            </div>
            <div className="right">
                <div className='header'>
                    <h3>Dashboard</h3>
                    {/* <input placeholder='Search...'>
                        Search
                        <div className="serachIcon"></div>
                    </input> */}
                    <div className="bellIcon"></div>
                    <div className="accountIcon"></div>
                </div>
                <div className="stats">
                    <div className="item card1">
                    </div>
                    <div className="item card2">
                    </div>
                    <div className="item card3">
                    </div>
                    <div className="item card4">
                    </div>
                </div>
                <div className="chart">
                    <Activities />
                </div>
                <div className="topProds">
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