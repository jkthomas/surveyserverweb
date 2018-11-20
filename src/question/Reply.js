import React, {Component} from "react";

class Reply extends Component {
    render() {
        return (
            <li>
                {this.props.reply.content}
            </li>)
    }
}

export default Reply;