import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context, server } from '../..'
import { Link, Navigate } from 'react-router-dom';
import BlogNav from './BlogNav';
import { toast } from 'react-hot-toast';
import format from 'date-fns/format';
import { formatISO9075 } from 'date-fns';
import UserLogin from '../../pages/UserLogin';
const Blogs = () => {
  const [dataItem, setDataItem] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setAdmin } = useContext(Context);

  try {
    useEffect(() => {
      axios.get(`${server}/blog/all`, {
        withCredentials: true,
      }).then((res) => setDataItem(res.data))
        .catch(err => console.error(err));
    }, [])
  } catch (error) {
    toast.error(error.response.data.message || "Some Error Occurred")
  }
  try {
    useEffect(() => {
      axios.get(`${server}/blog/all`, {
        withCredentials: true,
      }).then((res) => {
        setCategoryItems(res.data)
        const uniqueCategories = new Set(res.data.map(item => item.category));
        setCategoryItems(Array.from(uniqueCategories).sort());
      })
        .catch(err => console.error(err));
    }, [])
  } catch (error) {
    toast.error(error.response.data.message || "Some Error Occurred")
  }
  const submitHandler = (category) => {
    if (category === "All") {
      axios.get(`${server}/blog/all`, {
        withCredentials: true,
      }).then((res) => setDataItem(res.data))
        .catch(err => console.error(err));
    }
    else {
      try {
        axios
          .get(`${server}/blog/by-category?category=${category}`)
          .then((res) => setDataItem(res.data))
          .catch(err => console.error(err));
      } catch (error) {
      }
    }
  }


  return (
    (isAuthenticated) ?
   <>
      <BlogNav />
      <div className="blogCategory">
        <div className="categoryItems">

          {
            categoryItems && categoryItems.map((category) => (
              <button
                onClick={() => submitHandler(category)}> {category}  </button>
            ))
          }
        </div>
      </div>

      <div className="blog">
        <div className="content">
          {
            dataItem && dataItem.map((item) => (
              <Link to={`/blogpost/${item._id}`}>

                <div className="card" key={item._id}>
                  <div className="cardHeader">
                    <img src={item.blogImage} alt="card__image" className="card__image" width="600" />
                  </div>
                  <div className="cardBody">
                    <span className="tag tag-brown">{item.category}</span>
                    <h4>{item.title}</h4>
                    <p className='summary' dangerouslySetInnerHTML={{ __html: item.summary }}  style={{fontSize : "1rem"}}></p>
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
    </>: <UserLogin />
  )
}

export default Blogs