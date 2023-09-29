import React from 'react'
import { Link } from 'react-router-dom';
const Community = () => {
  return (
    <div className='community'>
      <aside>
        <div className="heading">
          Useful Links
        </div>
        <div className="tabs">
          <Link to={"/challenge"} >Challenges</Link>

          <Link to={"/blogs"}>Technical Blogs </Link>
          <Link to={"/underconstruction"}>Community Forum</Link>
          <Link to={"/linkscollection"} >Links of Free courses</Link>
        </div>
      </aside>
      <div className="container">

        <div className='heading'>
          <h3>  Welcome to the <span> Community</span></h3>
        </div>
        <div className="content">
          <div className="heading">
            <p><b>Join our community and get started with us.</b></p>
          </div>
          <div className="links">
            <Link to={"https://chat.whatsapp.com/FIB3Kj67N0j9wbR5ma85sP"} >Join On Whatsapp</Link>
            <Link to={"https://t.me/+CKt6_2bR58IzNzRl"} >Join On Telegram</Link>
            <Link to={"https://discord.gg/MErXugZR"} >Join On Discord</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Community;