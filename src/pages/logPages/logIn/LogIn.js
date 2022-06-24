import React, { useContext, useState } from 'react'
import { useAuth } from '../../../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function LogSection() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { user, logIn } = useAuth()

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await logIn(email, password)
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='log-container'>
        <img 
            alt="sign in" 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/f2ad5ef1-522a-414e-9eb7-daa4f5d71cab/AR-es-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
            className='signup-bkg-img'
        /> 
        <div className='layer-bkg'></div>
        <form 
            className='log-form'
            onSubmit={handleSubmit}
        >
            <h2 className='log-title'>Log In</h2>
            <input 
                className='email-input'
                alt='mail input' 
                type='text' 
                placeholder='hello@netflix.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className='password-input'
                alt='password' 
                type='password' 
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className='log-btn'>Log In</button>
            <div className='row-container'>
                <label htmlFor='checkbox'>
                    <input id='checkbox' type='checkbox' />
                    <span>Remember me</span>
                </label>
                <p>Need help?</p>
            </div>
            <p className='final-ph'>Already subscribed to Netflix?<Link to="/signUp"><span>Sing Up</span></Link> </p>
            
        </form>
    </div>
  )
}
