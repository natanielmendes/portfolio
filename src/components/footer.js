import React from 'react'

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer__container'>
            <footer>
                <p>Created by Nataniel Carvalho © {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer;