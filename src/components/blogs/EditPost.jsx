import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../..';
import axios from 'axios';
import { Navigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import BlogNav from './BlogNav';
import { toast } from 'react-hot-toast';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]
const EditPost = () => {
    const { isAuthenticated, setIsAuthenticated, loading, setLoading, setAdmin } = useContext(Context);
    const [redirect, setRedirect] = useState(false);

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
    const [file, setFile] = useState(null);
    const [content, setContent] = useState("");

    const { user } = useContext(Context);

    try {

        useEffect(() => {
            axios
                .get(`${server}/blog/blogpost/${id}`)
                .then(res => {
                    setTitle(res.data.title)
                    setCategory(res.data.category)
                    setSummary(res.data.summary)
                    setFile(res.data.blogImage)
                    setContent(res.data.content)
                })
                .catch(err => console.error(err));
        }, [])
    } catch (error) {
        toast.error("Some Error Occured");
    }
    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("category", category);
            formData.append("summary", content.slice(0, 100));
            formData.append("file", file);
            formData.append("content", content);
            formData.append("author", user._id)

            const data = await axios.put(`${server}/blog/addblog/${id}`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },

            },
            )
            toast.success("Post Edited Successfully")
            setLoading(false);
            setRedirect(true);
        } catch (error) {
            toast.error("Some Error Occurred")
            setRedirect(false);
            setLoading(false);

        }
    };
    if (redirect) return <Navigate to={"/blogs"}  />

    if (!isAuthenticated) return <Navigate to={"/"} />
    return (
        <>
            <BlogNav />
            <div className="addBlog">
                <form onSubmit={submitHandler} encType="multipart/form-data">

                    <div className="inputField">
                        <span className="details">Title of the Post </span>
                        <input
                            type="text"
                            placeholder='Enter the title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="inputField">
                        <span className="details">Category </span>
                        <input
                            type="text"
                            placeholder='Choose a category of your Blog'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)} required/>
                    </div>
                    <div className="inputField">
                        <span className="details">Select the cover imge of your Blog</span>
                        <input
                            type="file"
                            name="blogImage"
                            onChange={(e) => setFile(e.target.files[0])} required/>
                    </div>
                    <div className="inputField">
                        <span className="details">Content of Post </span>
                        <ReactQuill className='blogContent'
                            placeholder='Start Writing From Here'
                            value={content}
                            onChange={newValues => setContent(newValues)} 
                            modules={modules}
                            formats={formats} />
                    </div>

                    <input className='submitBtn' type="submit" value="Add Post" disabled={loading}/>
                </form>
            </div>
        </>
    )
}

export default EditPost