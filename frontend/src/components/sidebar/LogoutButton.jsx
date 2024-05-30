import React from 'react'
import { CiLogout } from "react-icons/ci";
import Logout from '../../Hooks/useLogout';

function LogoutButton() {
    const { loading, logout } = Logout()

    return (
        <div className='mt-auto'>
            {loading ? (<span className="loading loading-ring loading-lg"></span>
            ) : <CiLogout className='w-6 h-6 text-white cursor-pointer' onClick={logout} />}
        </div>
    )
}

export default LogoutButton
