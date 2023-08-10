import React from 'react'
import { useContext } from 'react'
import { Context } from '..'
import Loader from './Loader'

const Profile = () => {
    const {user, loading }  = useContext(Context)
  return (
    loading ? <Loader/>:
    <div>
        <h1>{ user?.name }</h1><br/>
        <h3> {user?.email} </h3>
    </div>
  )
}

export default Profile