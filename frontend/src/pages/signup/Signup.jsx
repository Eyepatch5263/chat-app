import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='h-full p-6 w-full bg-white-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
          <h1 className='text-3xl font-semibold text-center text-white' style={{fontFamily:"serif"}}>Sign Up
          <span style={{fontWeight:"bolder"}} className='text-pink-400'> Eye</span>
          </h1>
          <form>
              <div>
                  <label className="label">
                      <span className='label-text' style={{fontSize:"17px"}}>Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Name" className="input input-bordered input-secondary w-full min-w-xs" />
              </div>

              <div>
                  <label className="label">
                      <span className='label-text' style={{fontSize:"17px"}}>Username</span>
                  </label>
                  <input type="text" name='username' placeholder="Username" className="input input-bordered input-secondary w-full min-w-xs" />
              </div>
              <div>
              <label className="label">
                      <span className='label-text' style={{fontSize:"17px"}}>Password</span>
                  </label>
                  <input type="password" name='password' placeholder="Password" className="input input-bordered input-secondary w-full min-w-xs" />
              </div>
              <div style={{paddingBottom:"6px"}}></div>
              <div>
              <label className="label">
                      <span className='label-text' style={{fontSize:"17px"}}>Confirm Password</span>
                  </label>
                  <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered input-secondary w-full min-w-xs" />
              </div>
              <div style={{paddingBottom:"10px"}}></div>

              <GenderCheckbox/>
              <div style={{paddingBottom:"8px"}}></div>
              
              <div>
              <button style={{fontSize:"18px",fontWeight:"lighter"}} className="btn btn-secondary btn-block text-white">Sign Up</button>
              </div>
              <div style={{paddingBottom:"10px"}}></div>
          
              <a href='#' className='text-md hover:underline hover:text-pink-400 inline-block'>
                  Already have an account?
              </a>


          </form>
          </div>
      </div>
  )
}

export default Signup
