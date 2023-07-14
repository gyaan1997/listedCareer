import React, { useState } from "react";
import Search from '../Images/search.png'
import Notification from '../Images/notification.png'
import Account from '../Images/account.png'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // const handleLogout = () => {
    //     // Perform logout logic here
    //     console.log('Logout clicked');
    // };
    const { logout } = useAuth0();
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

                <div
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        style={{
                            width: '30px',
                            height: '30px',
                            marginLeft: '30px',
                            cursor: 'pointer',
                        }}
                        src={Account}
                        alt="account"
                        onClick={handleToggleDropdown}
                    />

                    {showDropdown && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '25px',

                                right: 0,
                                // background: '#fff',
                                // border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '10px',
                                zIndex: 1,
                                fontFamily: 'Monserrat, sans-serif',
                                fontSize: '14px',
                            }}
                        >
                            <button
                                style={{
                                    margin: '5px 0',
                                    borderRadius: '4px',
                                    padding: '8px 12px',
                                    height: "30px",
                                    width: "100px",
                                    cursor: 'pointer'
                                }}
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</button>
                        </div>
                    )}
                </div>
            </div>



        </header>
    );
};

export default Header;