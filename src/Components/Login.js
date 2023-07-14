import React from 'react'
// import Apple from "../Images/apple.png"
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='login' >
            <h1 style={{
                height: "45px",
                fontFamily: 'Montserrat-sans-serif',
                fontWeight: "700",
                fontSize: "36px",
                lineHeight: "43.88px",
                marginLeft: "20px",
                marginBottom: "0px"
            }}>Sign In</h1>
            <span
                style={{
                    height: "20px",
                    fontFamily: "Lato",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19px",
                    marginLeft: "20px",



                }}
            >Sign in to your account</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px" }}>
                <div style={{ width: "180px", height: "30px", marginLeft: "10px", borderRadius: "5px", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-around", alignItems: "center", cursor: "pointer" }}>
                    <div onClick={() => loginWithRedirect()} style={{ fontFamily: 'Montserrat-sans-serif', fontWeight: "500", fontSize: "14px", textAlign: "center", color: "#858585" }}>Click here to Log In</div>
                </div>

            </div>
        </div>
    )
}

export default Login