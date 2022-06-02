import React from 'react';
import {Link} from "react-router-dom";
import './Post.css';

function Post({title, link, label, comments, ups}) {
    return (
        <article className='card'>
            <h3>{title}</h3>
            <div className='meta'>
                <Link className='subreddit-link' to={link}>{label}</Link>
                <span className='comments'>Comments {comments}</span> - <span className='comments'>Ups {ups}</span>
            </div>
        </article>
    );
}

export default Post;