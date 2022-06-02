import React from 'react';
import {Link} from "react-router-dom";
import './Post.css';
import {limitChar} from "../../helper/LimitChar";
import NumberFormat from "react-number-format";

function Post({title, url, link, label, comments, ups}) {
    return (
        <article className='card'>
            <h3><a href={url} target='_blank'>{limitChar(title, 100)}</a></h3>
            <div className='meta'>
                <Link className='subreddit-link' to={link}>{label}</Link>
                <span className='comments'>Comments <NumberFormat
                    value={comments}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                /></span> - <span className='comments'>Ups <NumberFormat
                value={ups}
                displayType={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
            /></span>
            </div>
        </article>
    );
}

export default Post;