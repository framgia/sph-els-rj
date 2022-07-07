import React, { useEffect } from 'react'
import { logout } from '../../../redux/features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const DashboardScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logoutHandler = () => {

    dispatch(logout())
    navigate('/login')
  }




  return (
    <div>

      <button onClick={() => logoutHandler()}>LOGOUT</button>
    </div>
  )
}

export default DashboardScreen