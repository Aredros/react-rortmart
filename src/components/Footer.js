import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__phrase">
                <p>© 2020 Rortmart. All rights reserved.</p>
            </div>
            <div className="footer__social-media">
                <a href="https://twitter.com/"><span className="fa fa-twitter"></span></a>
                <a href="https://www.facebook.com/"><span className="fa fa-facebook"></span></a>
                <a href="https://dribbble.com/"><span className="fa fa-dribbble"></span></a>
                <a href="https://www.instagram.com/"><span className="fa fa-instagram"></span></a>
            </div>
        </footer>
    )
}

export default Footer;