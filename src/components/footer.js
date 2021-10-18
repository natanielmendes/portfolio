import React from 'react';

const Footer = () => {
    return (
        <footer
        style={{
            marginTop: `2rem`,
        }}
        >
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            <p>Created by Nataniel Carvalho © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;