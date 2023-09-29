import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '..';
import axios from 'axios';
import cn from '../icons/cn.png';
import gfg from '../icons/gfg.png';
import leetcode from '../icons/leetcode.png';
import SdeChallengeAdd1 from './admin/SdeChallengeAdd1';
import UserLogin from '../pages/UserLogin';
import { LoaderIcon, toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';


const LoginWithError = () =>{
    toast.error("Login First");
    <Navigate to={"/"} />
}


const SdeChallenge1 = () => {
    const {admin  , isAuthenticated} = useContext(Context);
    const [questions, setQuestions] = useState([]);
    const [progress, setProgress] = useState('');
    const [isComplete1, setIsComplete1] = useState(false);
    const [isComplete2, setIsComplete2] = useState(false);
    const [isComplete3, setIsComplete3] = useState(false);
    const [isComplete4, setIsComplete4] = useState(false);
    const [id ,setId] =useState("");
    useEffect(() => {
        axios
            .get(`${server}/challenge/all`, {
                withCredentials: true,
            })
            .then((res) => {
                setQuestions(res.data)
                setId(res.data._id)
                setProgress(res.data.progress);
                setIsComplete1(res.data.question1.isComplete);
                setIsComplete2(res.data.question2.isComplete);
                setIsComplete3(res.data.question3.isComplete);
                setIsComplete4(res.data.question4.isComplete);
            })
            .catch(err => console.error(err));
    }, [])


    return (
        (isAuthenticated) ?
        <div className="sdeChallenge">
            <div className="heading" >
                <h1>Sde Challenge</h1>
                <span>dd/mm/yyyy - dd/mm/yyyy</span>
            </div>
            {questions.map((item, index) =>
            (
                <>
                    <div className="container" key={index}>
                        <div className="date">
                            Date : {item.created.slice(0, 10)}
                            
                        </div>

                        <div className="box">
                            <div>Question1 </div>
                            <div className="checkBox">
                                <input type="checkbox" name="check" id="" checked={isComplete1} onChange={async(e) =>{
                                    await axios.put(`${server}/challenge/isComplete/`,{},
                                    {
                                        withCredentials: true,
                                    }
                                    )
                                }} />
                            </div>
                            <div className="content">
                                <h3>{item.question1.questionText}</h3>
                            </div>
                            <span>Tags : {item.question1.tags}</span>
                            <br />
                            <div className="links">
                                <a href={item.question1.link1}><img src={gfg} alt="" /></a>
                                <a href={item.question1.link2}> <img src={leetcode} alt="" /></a>
                                <a href={item.question1.link2}> <img src={cn} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div>Question 2</div>
                            <div className="checkBox">
                                <input type="checkbox" name="check" id="" onClick={(e) =>{
                                    if(!isComplete1){
                                        setIsComplete2(true)
                                    }
                                    else{
                                        setIsComplete2(false);
                                    }
                                }} />
                            </div>
                            <div className="content">
                                <h3>{item.question2.questionText}</h3>
                            </div>
                            <span>Tags : {item.question2.tags}</span>
                            <br />
                            <div className="links">
                                <a href={item.question2.link1}><img src={gfg} alt="" /></a>
                                <a href={item.question2.link2}><img src={leetcode} alt="" /></a>
                                <a href={item.question1.link2}> <img src={cn} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div>Question 3</div>
                            <div className="checkBox">
                                <input type="checkbox" name="check" id="" onClick={(e) =>{
                                    if(!isComplete1){
                                        setIsComplete3(true)
                                    }
                                    else{
                                        setIsComplete3(false);
                                    }
                                }} />
                            </div>
                            <div className="content">
                                <h3>{item.question3.questionText}</h3>
                            </div>
                            <span>Tags : {item.question3.tags}</span>
                            <br />
                            <div className="links">
                                <a href={item.question3.link1}><img src={gfg} alt="" /></a>
                                <a href={item.question3.link2}><img src={leetcode} alt="" /></a>
                                <a href={item.question3.link3}> <img src={cn} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div>Question 4</div>
                            <div className="checkBox">
                                <input type="checkbox" name="check" id="" onClick={(e) =>{
                                    if(!isComplete1){
                                        setIsComplete4(true)
                                    }
                                    else{
                                        setIsComplete4(false);
                                    }
                                }} />
                            </div>
                            <div className="content">
                                <h3>{item.question4.questionText}</h3>
                            </div>
                            <span>Tags : {item.question4.tags}</span>
                            <br />
                            <div className="links">
                                <a href={item.question4.link1}><img src={gfg} alt="" /></a>
                                <a href={item.question4.link2}><img src={leetcode} alt="" /></a>
                                <a href={item.question1.link2}> <img src={cn} alt="" /></a>
                            </div>
                        </div>
                        <hr />
                    </div> 
                </>
            ))}
           {(admin) ? <SdeChallengeAdd1 /> :
          <hr />
        }
        </div> : <LoaderIcon />
        
    )
}
export default SdeChallenge1