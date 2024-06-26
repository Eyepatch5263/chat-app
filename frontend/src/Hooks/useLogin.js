import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import toast, { Toaster } from 'react-hot-toast';

const useLogin=()=>{
    const [loading,setLoading]=useState(false)
    const {authUser,setAuthUser}=useAuthContext()
    const login=async(username,password)=>{
        setLoading(true)
        try {
            const res=await fetch('/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({username,password})
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-app",JSON.stringify(data))
            setAuthUser(data)
            toast.success('Logged in successfully')
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }

    }
    return {loading,login}
}

export default useLogin