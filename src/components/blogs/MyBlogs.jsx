import React, { useContext, useEffect, useState } from 'react'
import { Context, server } from '../..';
import axios from 'axios';
import BlogNav from './BlogNav';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { formatISO9075 } from 'date-fns';

const MyBlogs = () => {
  const [dataItem, setDataItem] = useState([]);
  const { user } = useContext(Context);
  try {
    useEffect(() => {
      axios.get(`${server}/blog/myblogs/${user._id}`, {
        withCredentials: true,
      }).then((res) => setDataItem(res.data))
        .catch(err => console.error(err));
    }, [])
  } catch (error) {
    toast.error(error.response.data.message || "Some Error Occurred")

  }

  return (
    <>
      <BlogNav />
      <div className="blog">

        <div className="content">
          {
            dataItem.map((item) => (
              <Link to={`/blogpost/${item._id}`}>

               
<div className="card" key={item._id}>
                  <div className="cardHeader">
                    <img src={item.blogImage} alt="card__image" className="card__image" width="600" />
                  </div>
                  <div className="cardBody">
                    <span className="tag tag-brown">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p className='summary' dangerouslySetInnerHTML={{ __html: item.summary }} style={{fontSize : "1rem"}}></p>
                  </div>
                  <div className="cardFooter">
                    <div className="user">
                      {/* <img src="{}" alt="user__image" className="user__image" /> */}
                      <div className="user__info">
                        <h5>{item.author.username}</h5>
                        {/* <small>{format(new Date(item.createdAt), "MMM dd,yyy HH:mm")}</small> */}
                        <small>{formatISO9075(new Date(item.createdAt))}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

            ))
          }


        </div>
      </div>

    </>
  )
}

export default MyBlogs