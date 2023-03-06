import React from 'react'

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer__container'>
            <footer>
                <p style={{marginBottom: 0}}>Created by Nataniel Mendes © {new Date().getFullYear()}</p>
            </footer>
        </div>
    )
}

export default Footer;