import React from 'react'
import "./home.scss"
function Home() {
    return (
        <div className='home'>
            <div class="left">
                <h1>Board.</h1>
            </div>
            <div class="right">
                <h1 className="signin">Sign In</h1>
                <span>Sign in to your account</span>
            </div>
        </div>
    )
}

export default Home