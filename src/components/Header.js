import React, {useState} from "react";
import logo from '../rormart-logo.png';

const Banner = ({ src, alt, text }) => {
	const [isNavVisible, setNavVisibility] = useState(false);

	function toggleNav() {
		setNavVisibility(!isNavVisible);
	  }

  return (
    <header className="header">
        <nav className="navbar" aria-label="navigation">
			<div className="navbar__header">
                <img src={logo} className="" alt="logo" />
			</div>
            <div id="nav-icon" 
				className={`nav-icon ${isNavVisible ? 'open' : ''}`}
				onClick={toggleNav}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className= {`navbar__collapsable ${isNavVisible ? 'visible-navbar' : 'invisible-navbar'}`}>
				<ul className="navbar__collapsable__navigation">
					<li>
						<a href="/">Accueil</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
    </header>
  ); 
};

export default Banner;