import React from 'react';

const date = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='copyright'>
            <p><i class="far fa-copyright"></i> Abel Zambrano {date}</p>
        </div>
    )
}

export default Footer;