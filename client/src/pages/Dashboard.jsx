import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user = useSelector((state)=>state.authReducer.user)
    console.log(user)
  return (
    <>
    <h1>Dashboard</h1>
    <h3>First Name : {user.name}</h3>
    <h3>Last Name : {user.lastName}</h3>
    <h3>Email : {user.email}</h3>

    </>
  )
}

export default Dashboard