import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context, server } from '../..';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import UserLogin from '../../pages/UserLogin';
import { toast } from 'react-hot-toast';

const LinksCollection = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading, setAdmin } = useContext(Context);

  const [links, setLinks] = useState([]);
  useEffect(() => {
    axios
      .get(`${server}/links/all`, {
        withCredentials: true,
      })
      .then((res) =>
        setLinks(res.data)
      )
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <div className="linksCollection">
        <div className="heading">
          <h2>Links of all Paid Courses</h2>
          <p>But Don't worry they all are free for you guys. Because we are the community.</p>
        </div>
        <div className="content">

          <div className="container">
            <div className="title">Title of the Course</div>
            <div className="url">Url of the Course</div>
            <div className="contributor">Contributed by</div>
          </div>

          {links.map((items) => (
            <div className="container" key={items._id}>
              <div className="title">{items.title}</div>
              <div className="url"><Link to={items.url}> Link here</Link>  </div>
              <div className="contributor">{items.username}</div>
            </div>
          ))
          }
          <Link to={"/addlinks"} className='button'><span><FaPlus /></span>Contribute One</Link>
        </div>
      </div>
    </>
  )
}

export default LinksCollection