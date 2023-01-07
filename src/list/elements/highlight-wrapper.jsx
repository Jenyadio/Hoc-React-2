import React from "react";
import New from "./new";
import Popular from "./popular";
import Video from "./video";
import Article from "./article";

function highlightWrapper(InitialComponent) {
    return class extends React.Component {
        render() {
            if (this.props.views < 100) {
                return (
                    <New>
                        <InitialComponent {...this.props}/>
                    </New>
                )
            }
            if (this.props.views >= 1000) {
                return (
                    <Popular>
                        <InitialComponent {...this.props}/>
                    </Popular>
                )
            }
            return (
                <InitialComponent {...this.props}/>
            )
        }

    }
}

export const VideoHL = highlightWrapper(Video);
export const ArticleHL = highlightWrapper(Article);