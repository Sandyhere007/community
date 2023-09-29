import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../..';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillDelete, AiFillEdit, AiOutlineCalendar, } from 'react-icons/ai';
import BlogNav from './BlogNav';
import { toast } from 'react-hot-toast';
import { formatISO9075 } from 'date-fns';
import ReactQuill from 'react-quill';
import UserLogin from '../../pages/UserLogin';

const BlogPost = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setAdmin } = useContext(Context);
  const [dataItem, setDataItem] = useState([]);
  const { id } = useParams();
  try {
    useEffect(() => {
      axios.get(`${server}/blog/blogpost/${id}`, {
        withCredentials: true,
      }).then((res) => setDataItem(res.data))
        .catch(err => console.error(err));
    }, [])

  } catch (error) {
    toast.error(error.response.data.message || "Some Error Occurred")

  }

  // if (!isAuthenticated) return <Navigate to={"/"} />
  return (
    (isAuthenticated)?
    <>
      <BlogNav />
      <div className="blogpost">
        <div className="container">
          <div className="blog">
            <div className="blogHeader">
              <h1 className="blogTitle">{dataItem.title}</h1>
              <div className="publishedInfo">
                <div className="publishedDate">
                  <AiOutlineCalendar />
                  <small>{dataItem.createdAt &&
                    formatISO9075(new Date(dataItem.createdAt))
                  }</small>
                </div>
                {dataItem.author && (
                  <div className="author">{dataItem.author.username}</div>
                )}
              </div>
              <div className="user">
                <div className="editPost">
                  <Link to={`/editpost/${id}`}>
                    <AiFillEdit />
                  </Link>
                  <Link to={"/"}>
                    <AiFillDelete />
                  </Link>
                </div>
              </div>
            </div>
            <img
              src={dataItem.blogImage}
              alt="blog__image"
              className="blogImage"
            />
            
            <ReactQuill
            className="content"
          value={dataItem.content}
          readOnly={true}
        modules={{
          toolbar: false, // Disable the toolbar if you don't need it
          clipboard: {
      matchVisual: false, // Set this to false to paste plain text
    },
  }}
/>
            {/* <div className="content" dangerouslySetInnerHTML={{ __html: dataItem.content }} /> */}
          </div>
        </div>
      </div>
    </>:<UserLogin />

  )
}

export default BlogPost