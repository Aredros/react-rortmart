import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import firstBackground from "../assets/images/robot-spy.png";
import '../styles/pages/_contact.scss';
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact-page">
        <Header />

        {/*  Contact - Description */}

        <section className="introduction-description image-banner orange-banner" 
                 style={{backgroundImage: `url(${firstBackground})`,
                 backgroundPosition: `center 8%`}}>
            <div className="introduction-description__text-area">
                <h1 className="orange-title">Parlons web design !</h1>
                <p>Nous sommes ravis que vous souhaitiez collaborer avec notre agence.<br/>
                    Parlez-nous de votre projet en complétant le formulaire ci-dessous.</p>
            </div>
        </section>

        {/*  Contact - form */}

        <section className="contact-form">
                <div className="contact-form__form">
                   <Form />
                </div>
            <div className="contact-form__description">
              <div>
                    <p className="little-description">contact@agencelapanthere.com</p>
                    <p className="little-description">2 place Sathonay 69001 Lyon</p>
                    <p className="little-description">Ouvert de 9h à 18h, du lundi au vendredi</p>
              </div>
            </div>
        </section>

        <Footer />
    </div>
  );
};

export default Contact;