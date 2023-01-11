import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import logo from '../rormart-logo.png'
import firstBackground from '../assets/images/worker.png'
import secondBackground from '../assets/images/builder.png'
import thirdBackground from '../assets/images/market-helper.png'
import IconText from "../components/IconText"
import ImgText from "../components/ImgText"
import Client1 from '../assets/images/child-holder.jpg'
import Client2 from '../assets/images/casse.png'
import Client3 from '../assets/images/robot-spy.png'
import Client4 from '../assets/images/talker.jpg'

const Home = () => {
  return (
    <div>
        <Header />
        <section className="home-banner image-banner" 
                style={{backgroundImage: `url(${firstBackground})`,
                backgroundPosition: `center 8%`}}>
                <img src={logo} className="" alt="logo" />
                <div className="orange-cover">
                  <h1 className="orange-title">Providing the service providers of tomorrow </h1>
                </div>
                <button className="first-button">Contact</button>
        </section>

          {/* Introduction - services */}

        <section className="introduction-services white-area">
            <h3 className="small-title">L'agence La Panthère est une agence de web design qui aide les 
              enterprises à devenir attractives et visibles sur Internet.</h3>
            <div className="introduction-services__icons">
              <IconText key={'iconT1'} 
                        icon={"ic:round-install-desktop"} 
                        title={'Web design'} 
                        description={'Que vous ayez un site web qui a besoin d’un rafraîchissement ou que vous partiez de zéro, laissez-nous vous réaliser un design dont vous serez fier.'}/>
              <IconText key={'iconT2'} 
                        icon={"fluent:data-trending-16-regular"} 
                        title={'Stratégie'} 
                        description={'Plutôt que de suggérer des designs à la mode, nous travaillerons avec vous pour comprendre vos objectifs commerciaux afin de vous proposer le meilleur design possible.'}/>
              <IconText key={'iconT3'} 
                        icon={"fa6-regular:pen-to-square"} 
                        title={'Illustrations'} 
                        description={"Un bon design n'est rien sans de bonnes illustrations. Laissez faire notre équipe de graphistes talentueux pour donner à vos pages une touche finale d'élégance."}/>

            </div>
            <h3 className="small-title colored-title">"L'agence La Panthère est une excellente agence web ! 
            Les web designers ont réussi à capturer l'essence de notre enterprise et à l'intergrer à notre site. 
            Cela nous a aidé à doubler nos ventes en ligne à Lyon."<br/>
            Maxime Guibard, PDG de A vos fourchettes</h3>
        </section>

        {/* Introduction - Description */}

        <section className="introduction-description image-banner orange-banner" 
                 style={{backgroundImage: `url(${secondBackground})`,
                 backgroundPosition: `center 8%`}}>
            <div className="introduction-description__text-area">
                <h3 className="">NOUS SOUHAITONS AIDER LES ENTREPRISES DE LA REGION LYONNAISE A SE DEVELOPPER. NOUS TRAVAILLONS POUR AIDER LES ENTREPRISES LOCALES A ATTIRER DE NOUVEAUX CLIENTS .</h3>
                <p>Nous aimons collaborer avec des entrepreneurs créatifs et des entreprises locale, qu’elles aient besoin de créer un site de A à Z ou de donner un coup de jeune à leur site. Que vous ayez besoin d’une identité visuelle complète ou d’une refonte de votre site, n’hésitez pas à nous contacter. Nous travaillerons ensemble pour créer des sites beau et bien structurés, qui seront facilement trouvable sur les moteurs de recher.</p>
                <a href="#home">En savoir plus</a>
            </div>
        </section>

        {/* Introduction - Clients */}

        <section className="introduction-clients white-area">
            <h3 className="small-title">Nous travaillons avec beaucoup de clients, 
            voici nos réalisations.</h3>
            <div className="introduction-clients__area">
                < ImgText key={'IT1'} title={'Refonte un site web pour un journal local'} image={Client1} description={"Nous avons créé une nouvelle identité visuelle pour un journal lyonnais."} />
                < ImgText key={'IT2'} title={"Création d'un site web pour photographes"} image={Client2} description={"Nous avons conçu la plateforme idéale pour laisser place aux clichés des photographes."} />
                < ImgText key={'IT3'} title={"Création d'un site internet pour un voyageur"} image={Client3} description={"Nous avons élaboré un site internet et des illustrations pour sublimer les vidéos et les articles de ce voyageur."} />
                < ImgText key={'IT4'} title={"Conception d'un site pour une agence de mariage"} image={Client4} description={"Nous avons travaillé avec cette agence pour créer un site internet permettant la présentation détaillée de leurs prestations."} />

            </div>
            <h3 className="small-title colored-title">L'agence La Panthère est une agence de web design qui aide les 
              enterprises à devenir attractives et visibles sur Internet.</h3>
        </section>

        {/* Introduction - Description */}

        <section className="home-banner image-banner description-banner" 
                style={{backgroundImage: `url(${thirdBackground})`,
                backgroundPosition: `center 8%`}}>
                <div className="orange-cover">
                  <h3 className="orange-title">PRET POUR REDONNER VIE A VOTRE PROJET? <br/> CONTACTEZ NOTRE EQUIPE !</h3>
                </div>
                <button className="first-button">Contact</button>
        </section>

        <Footer />
    </div>
  );
};

export default Home;
