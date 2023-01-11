import React from "react";
import { Icon } from '@iconify/react';

const IconText = ({ icon, title, description }) => {
    return (
        <article className="icon-text-box">
            <Icon icon={icon} width="80" height="80"/>
            <h4>{title}</h4>
            <p className="little-description">{description}</p>
        </article>
    );
};

export default IconText;