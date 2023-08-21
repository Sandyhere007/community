import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../..';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiFillDelete, AiFillEdit, AiOutlineEdit } from 'react-icons/ai';
import BlogNav from './BlogNav';
import { toast } from 'react-hot-toast';

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

  if (!isAuthenticated) return <Navigate to={"/"} />
  return (
    <>
      <BlogNav />
      <div className="blogpost">
        <div className="container">


          <div class="blog" >
            <div class="blogHeader">
              <img src={`${server}/uploads/${dataItem.blogImage}`} alt="card__image" class="blogImage" width="600" />

              <div class="user">
                {/* <img src="{}" alt="userImage" class="userImage" /> */}
                <div class="userInfo">
                  {/* <h5>{dataItem.author.username}</h5> */}
                  <small>{dataItem.createdAt}</small>
                </div>
                <div className="editPost">
                  <Link to={`/editpost/${id}`}><AiFillEdit /></Link>
                  <Link to={"/"}><AiFillDelete /></Link>


                </div>
              </div>
            </div>
            <div class="blogBody">
              <span class="tag tagBrown"></span>
              <h4>{dataItem.title}</h4>
              <div className="content" dangerouslySetInnerHTML={{ __html: dataItem.content }} />

            </div>
          </div>
          <hr />
          <p style={{ textAlign: 'center' }}>End of the Post</p>


        </div>
      </div>
    </>

  )
}

export default BlogPost