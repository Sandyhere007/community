import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
// import { Navigate } from 'react-router-dom';
import { Context, server } from '../..';
import { Navigate } from 'react-router-dom';

const AddLinks = () => {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post(`${server}/links/add`, {
                username, title, url
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            toast.success(data.message);
            // history.pushState("./")
            setIsCompleted(true);
            setLoading(false);
            
        } catch (error) {
            toast.error(error.response.data.message);
            setIsCompleted(false);
            setLoading(false);

        }
    };
    if(isCompleted) return <Navigate to={"/linkscollection"} />
    return (
        <div className="addlink">
            <div className="container">
                <div className="title">Add Link</div>
                <div className="content">
                    <form onSubmit={submitHandler} action='/'>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="username" placeholder="Enter your username" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Title of the Course</span>
                                <input type="text" placeholder="Name of the Course" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">URL of the course</span>
                                <input type="text" placeholder="Name of the URL of the course" name='url' value={url} onChange={(e) => setUrl(e.target.value)} />
                            </div>

                        </div>

                        <div className="button">
                            <input disabled={loading} type="submit" value="Add Course" />
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddLinks