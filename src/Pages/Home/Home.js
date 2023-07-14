import React from 'react'
import "./home.scss"
import Login from '../../Components/Login'
function Home() {
    return (
        <div className='home'>
            <div class="left">
                <h1>Board.</h1>
            </div>
            <div className='right'>
                <Login />
            </div>
        </div>
    )
}

export default Home