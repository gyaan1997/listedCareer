import React from "react";
import Search from '../Images/search.png'
import Notification from '../Images/notification.png'
import Account from '../Images/account.png'
const Header = () => {
    return (
        <header style={{ display: "flex", alignItems: "center", height: "30px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h2 style={{ height: "30px", fontFamily: "Monserrat,sans-serif", fontWeight: "700", fontSize: "24px", lineHeight: "30px", cursor: "pointer" }}>Dashboard </h2>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "590px" }}>
                <input type="text" placeholder="Search..." style={{ width: "180px", height: "30px", border: "0", borderRadius: "5px" }} />
                <div style={{ marginLeft: "-20px", display: "flex", cursor: "pointer" }}>
                    <img style={{ width: "12px", height: "12px", color: "#8588585" }} src={Search} alt="search">
                    </img></div>
                <img style={{ width: "18px", height: "20px", color: "#000000", marginLeft: "40px", cursor: "pointer" }} src={Notification} alt="notification"></img>

                <img style={{ width: "30px", height: "px", marginLeft: "30px", cursor: "pointer" }} src={Account} alt="account"></img>
            </div>



        </header>
    );
};

export default Header;