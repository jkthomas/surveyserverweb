import React, {Component} from "react";
import Reply from "./Reply";

class ReplyManager extends Component {
    render() {
        const replies = this.props.replies.map((reply) =>
            <Reply key={reply.id} reply={reply}/>
        );
        return (
            <div>
                {replies}
                <button onClick={() => {this.props.buttonClick()}}>Next question</button>
            </div>)
    }
}

export default ReplyManager;