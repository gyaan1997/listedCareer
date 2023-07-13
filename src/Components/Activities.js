import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import Vector from "../Images/vector.png"

const Activities = () => {
    const data = [
        { name: '', Guest: 200, User: 100 },
        { name: 'Week1', Guest: 300, User: 250 },
        { name: 'Week2', Guest: 150, User: 180 },
        { name: 'Week3', Guest: 400, User: 680 },
        { name: 'Week4', Guest: 250, User: 150 },
    ];

    return (<>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}>
            <h3 style={{ fontFamily: "Monserrat,sans-serif", fontWeight: "700", marginTop: "30px", marginBottom: "5px", fontSize: "18px", color: "#000000" }}>Activities</h3>
            <span style={{ fontFamily: "Monserrat,sans-serif", fontWeight: "400", fontSize: "14px", lineHeight: "17px", color: "#858585" }}>May-June 2021
                <span >
                    <img style={{ width: "8px", height: "5px", color: "#858585", marginLeft: "5px", marginTop: "5px" }}
                        src={Vector} alt="vector"></img>
                </span>
            </span>
        </div>
        <div style={{ width: '95%', height: 280 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="name"
                        axisLine={{ stroke: '#000', strokeWidth: 1 }}
                        tickLine={false}
                    />
                    <YAxis axisLine={false}

                        tickLine={false}
                        ticks={[0, 100, 200, 300, 400, 500]}
                    />

                    <Tooltip />
                    {/* tried making icons circular ,didnt workout */}
                    {/* <Legend verticalAlign="top" align="right" >
                        {(props) => {
                            const { payload } = props;
                            return payload.map((entry, index) => (
                                <div key={`item-${index}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <div
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor: entry.color,
                                            marginRight: '5px',
                                        }}
                                    />
                                    <span>{entry.value}</span>
                                </div>
                            ));
                        }}
                    </Legend> */}
                    <Legend verticalAlign="top" align="right" />

                    <Line type="monotone" dataKey="Guest" stroke="#90EE90" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="User" stroke="#FFB6C1" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </>
    );
}

export default Activities;