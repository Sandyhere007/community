import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '..'
import PageNotFound from '../components/PageNotFound';
import UserLogin from './UserLogin';
const Challenges = () => {
  const { isAuthenticated} = useContext(Context);
  return (

    (isAuthenticated) ?
    <div className="challenge">
      <div className="container">
        <h1>Challenges</h1>
        <p>Challenges are built to make you strong. so challenge yourself to fly high and see you will land your dream job</p>
      </div>
      <div className="challengeData">
        <div className="box">
          <div className="heading">
            <h2>SDE Challenge 1</h2>
            <Link to={"/sdechallenge1"}>Open Challenge</Link>
          </div>
          <div className="para">
            SDE challenge is our chalenge of 30 days where we are going to solve 4 question continuoisly for 30 days which will make a question cout of 120 questions which are of 60% medium level, 20% easy level & 20% hard level. All question will be choosen specially for product based companies specially MAANG (Meta, Apple, Adobe, Netflix, Google ).SO get ready.
          </div>
        </div>
      </div>
    </div> :<UserLogin />
  )
}

export default Challenges