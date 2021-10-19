import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                marginTop: `2rem`,
            }}
        >
            <p>Created by Nataniel Carvalho © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;