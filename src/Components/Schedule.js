import React from 'react'
import "./schedule.scss"
import Vector2 from "../Images/vector2.png"

function Schedule() {
    return (
        <div className='schedule'>
            <div className="schedules">
                <h1>Today's Schedule</h1>
                <span style={{ marginLeft: "180px", marginTop: "35px", fontFamily: "Monserrat,sans-serif", fontWeight: "400", fontSize: "12px", lineHeight: "14px", color: "#858585" }}>See All
                    <span >
                        <img style={{ width: "5px", height: "8px", color: "#858585", marginLeft: "5px", marginTop: "5px" }}
                            src={Vector2} alt="vector"></img>
                    </span>
                </span>
                <span></span>
            </div>
            <div class="item">
                <div class="line1"></div>
                <div className="item1">
                    <h3>Meeting with suppliers from Kuta Bali</h3>
                    <span>14:00-15:00</span>
                    <span>at Sunset Road, Kuta Bali</span>
                </div>
            </div>
            <div class="item">
                <div class="line2"></div>
                <div className="item1">
                    <h3>Check operation at Giga Factory 1</h3>
                    <span>18:00-20:00</span>
                    <span>at Central Jakarta</span>
                </div>
            </div>
        </div>
    )
}

export default Schedule