import React from 'react';
import './PageTitle.css';

function PageTitle({children}) {
    return (
        <section className='page-title'>
            {children}
        </section>
    );
}

export default PageTitle;