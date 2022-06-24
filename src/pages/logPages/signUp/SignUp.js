import React, { useState } from 'react'
import { useAuth } from '../../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { user, signUp } = useAuth()

  const navigate = useNavigate()

  async function handleSubmit(e){
      e.preventDefault()
      try{
          await signUp(email, password)
          navigate('/')
      }catch(error){
          console.log(error)
      }
  }

  return (
   
        <div className='log-container'>
            <img 
                alt="Movies background" 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/f2ad5ef1-522a-414e-9eb7-daa4f5d71cab/AR-es-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
                className='signup-bkg-img'
            /> 
            <div className='signup-container'>
                <div className='layer-bkg'></div>
                <h1 className='signup-pry-head'>Unlimited movies, TV shows, and more.</h1>
                    <h2 className='signup-sec-head'>Watch anywhere. Cancel anytime.</h2>
                    <p className='signup-ph'>Ready to watch? Enter your email and password to create your membership.</p>
                <form 
                    className='signup-form'
                    onSubmit={handleSubmit}
                >
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
                    <button className='signup-btn'>Sign Up</button>
                </form>
            </div>
        </div>
 
  )
}
