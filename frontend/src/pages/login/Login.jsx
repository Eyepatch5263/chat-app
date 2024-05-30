import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='h-full p-6 w-full bg-white-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-white' style={{fontFamily:"serif"}}>Login
            <span style={{fontWeight:"bolder"}} className='text-pink-400'> Eye</span>
            </h1>
            <form>
                <div>
                    <label className="label">
                        <span className='label-text' style={{fontSize:"18px"}}>Username</span>
                    </label>
                    <input type="text" placeholder="Username" name='username' className="input input-bordered input-secondary w-full min-w-xs" />
                </div>
                <div>
                <label className="label">
                        <span className='label-text' style={{fontSize:"18px"}}>Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered input-secondary w-full min-w-xs" />
                </div>
                <div style={{paddingBottom:"20px"}}></div>
                
                <div>
                <button style={{fontSize:"18px",fontWeight:"lighter"}} className="btn btn-secondary btn-block text-white">Login</button>
                </div>
                <div style={{paddingBottom:"10px"}}></div>
                <a href='#' className='text-md hover:underline hover:text-pink-400 inline-block'>
                    Don't have an account?
                </a>


            </form>
            </div>
        </div>
    )
}

export default Login
