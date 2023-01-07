import React from "react";
import {v4} from "uuid";

function Video(props) {
    return (
        <div className="item item-video">
            <iframe title={v4()} src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

export default Video;