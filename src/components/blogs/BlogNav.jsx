import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../..'

const BlogNav = () => {
    const { user } = useContext(Context);
    return (
        <>
            <div className="blogNav">
                <div className="logo">
                    <Link to={'/blogs'}>Blog.Community</Link>

                </div>
                <div className="navItems">
                    <Link to={"/myblogs"} >My Blogs</Link>
                    <Link to={"/addblog"}>Create New</Link>
                </div>

            </div>
        </>
    )
}

export default BlogNav