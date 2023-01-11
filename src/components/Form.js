import React from "react";
import '../styles/components/_form.scss';

function Form () {
  return (
            <form className="site-form">
                <label for="name">Nom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom" />
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Votre email" />
                <label for="email">Comment nous avez-vous connu ?</label>
                <input type="text" id="meeting" name="meeting" placeholder="Comment" />
                <label for="message">Brief de votre projet (Ajoutez autant de détails que nécessaire)</label>
                <textarea id="message" name="message" placeholder="Votre message" />
                <input className="second-button" type="submit" value="Envoyer" />
            </form>
  );
}

export default Form;