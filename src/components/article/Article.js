import React from 'react';
import './Article.css';
import { useNavigate } from 'react-router-dom';
import NumberFormat from 'react-number-format';

function Article({title, description, subs}) {
    const navigate = useNavigate();

    return (
        <>
            <article className='single'>
                <h2>Title</h2>
                <p className='post-title'>{title}</p>
                <h2>Description</h2>
                <p className='post-description'>{description}</p>
                <h2>Number of subscribers</h2>
                <p className='post-subs'><NumberFormat
                    value={subs}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                /></p>
            </article>
            <div className='back'>
                <button onClick={() => navigate(-1)}>{'< Take me back'}</button>
            </div>
        </>
    );
}

export default Article;