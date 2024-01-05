import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Context, server } from '../..';
import axios from 'axios';
import BlogNav from './BlogNav';
import { Navigate } from 'react-router-dom';
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

const AddBlog = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setAdmin } = useContext(Context);
  const [redirect, setRedirect] = useState(false);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState('');
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const { user } = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("summary", content.substring(0, 100));
      formData.append("file", file);
      formData.append("content", content);
      formData.append("author", user._id)

      const data = await axios.post(`${server}/blog/addblog`,
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
      )
      toast.success(data.message || "Post Added Successfully")
      setLoading(false);
      setRedirect(true);

    } catch (error) {
      // toast.error(error.response.data.message || "Some Error Occurred")
      setLoading(true);
      setRedirect(false);


    }
  };
  if (redirect) return <Navigate to={"/blogs"} />
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
            <span className="details">Select the cover image of your Blog</span>
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

export default AddBlog;