import React from 'react'
import Apple from "../Images/apple.png"
import Google from "../Images/google.png"
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
                marginBottom: "5px"
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
            <div style={{ display: "flex", marginTop: "40px" }}>
                <div style={{ width: "180px", height: "30px", marginLeft: "10px", borderRadius: "5px", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <img style={{ width: "14px", height: "14px", marginLeft: "5px" }} src={Google} alt="google"></img>
                    <div onClick={() => loginWithRedirect()} style={{ fontFamily: 'Montserrat-sans-serif', fontWeight: "400", fontSize: "12px", textAlign: "center", color: "#858585" }}>Sign in with Google</div>
                </div>
                <div style={{ width: "180px", height: "30px", borderRadius: "5px", marginLeft: "10px", backgroundColor: "#FFFFFF", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <img style={{ width: "14px", height: "14px", marginLeft: "5px" }} src={Apple} alt="apple"></img>
                    <div style={{ fontFamily: 'Montserrat-sans-serif', fontWeight: "400", fontSize: "12px", textAlign: "center", color: "#858585" }}>Sign in with Apple</div>

                </div>
            </div>
        </div>
    )
}

export default Login