import React from "react";

const ImgText = ({ image, title, description }) => {
    return (
        <article className="img-text">
            <img src={image} alt="client" />
            <h4>{title}</h4>
            <p className="little-description">{description}</p>
        </article>
    );
};

export default ImgText;