import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context, server } from '../..';
import toast from 'react-hot-toast';
import Chats from './ForumChat';
import '../../styles/forum.scss'


const CommunityForum = () => {
const [forumData , setForumData] = useState([])
const [message, setMessage] = useState("");
const { user } = useContext(Context);


const submitHandler = async(e) =>{
    e.preventDefault();
    const data = await axios.post(`${server}/forum/send`, {
        message : message,
        senderId : user._id,
    },{
        headers: {
            'Content-Type': 'application/json',
          },
    })
    // toast.success(data.message || "Message Sent Successfully")
    // setMessage("");
    }    

try{
    useEffect(()=>{
        axios
        .get(`${server}/forum/all`,
        {withCredentials : true})
        .then((res) => setForumData(res.data))
        .catch((err)=> console.log(err)) 
        },[submitHandler]
   )}
   catch(error){
    toast.error(error.response.data.message || "Some Error Occured")
   }

    return (
    <>
    <div className="communityforum">
        <div className="sidebar">
            
        <h1>Community Forum</h1>
        <p>This is a space for members of the community to discuss and share ideas
            about various topics related to web development, programming, design,
            accessibility, user experience, etc. Feel free to ask questions,
            share your work, or simply engage with others who are interested in similar
            topics.</p>
        </div>
        <div className="chatarea">
            <div className="container">
               <span>  🙏🏻<br />Ram Ram Bhai Sareyane <br />
               Welcome to the forum</span>
                {forumData.map((item,index)=>(
                    <Chats senderId={item.senderId.username} 
                    message={item.message} key={index}/>
                ))
                }
            </div>
            <div className="inputArea">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter Your Message' value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommunityForum