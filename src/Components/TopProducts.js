import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Vector from "../Images/vector.png"
const TopProducts = () => {
    const data = [
        { name: 'Basic Tees', percentage: 55, color: '#98D89E' },
        { name: 'Custom Short Pants', percentage: 31, color: '#F6DC7D' },
        { name: 'Super Hoodies', percentage: 14, color: '#EE8484' }
    ];

    const COLORS = data.map(item => item.color);

    return (
        <div >
            <div style={{ display: "flex" }}>
                <h3 style={{ fontFamily: "Monserrat,sans-serif", fontWeight: "700", marginTop: "30px", marginLeft: "40px" }}>Top Products</h3>
                <span style={{ marginLeft: "180px", marginTop: "35px", fontFamily: "Monserrat,sans-serif", fontWeight: "400", fontSize: "12px", lineHeight: "14px", color: "#858585" }}>May-June 2021
                    <span >
                        <img style={{ width: "8px", height: "5px", color: "#858585", marginLeft: "5px", marginTop: "5px" }}
                            src={Vector} alt="vector"></img>
                    </span>
                </span>
            </div>
            <div style={{ display: 'flex', marginLeft: "30px" }}>
                <PieChart width={180} height={180}>
                    <Pie
                        data={data}
                        dataKey="percentage"
                        outerRadius={70}
                    >
                        {data.map((entry, index) => (
                            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
                <div style={{ marginLeft: '40px', marginTop: "-15px" }}>
                    {data.map((entry, index) => (
                        <div key={entry.name} style={{ display: 'flex', alignItems: 'center' }}>
                            <div
                                style={{
                                    width: '11px',
                                    height: '11px',
                                    borderRadius: '50px',
                                    backgroundColor: COLORS[index % COLORS.length],
                                    marginLeft: '5px',
                                    marginTop: "-7px"

                                }}
                            />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ marginTop: "20px", marginLeft: "10px", fontFamily: "Monserrat,sans-serif", fontWeight: "700", fontSize: "14px", lineHeight: "17px" }}>{`${entry.name} `}</span>
                                <span style={{ marginTop: "10px", marginLeft: "10px", fontFamily: "Lato", fontWeight: "400", lineHeight: "15px", fontSize: "12px", color: "#858585" }}>{`${entry.percentage}%`}

                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
