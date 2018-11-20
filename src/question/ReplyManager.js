import React, {Component} from "react";

class ReplyManager extends Component {
    // noinspection JSMethodCanBeStatic
    getInputType(type) {
        switch (type) {
            case 1:
                return "radio";
            case 2:
                return "radio";
            case 3:
                return "text";
            case 4:
                return "checkbox";
            default:
                return "";
        }
    }

    render() {
        this.inputType = "";
        this.inputType = this.getInputType(this.props.replies[0].type);
        const replies = this.props.replies.map((reply) => {
                return ([
                        <input key={reply.id} type={this.inputType}/>,
                        <label>{reply.content}</label>,
                        <br/>
                    ]
                )
            }
        );
        return (
            <div>
                {replies}
                <button onClick={() => {
                    this.props.buttonClick()
                }}>Next question
                </button>
            </div>)
    }
}

export default ReplyManager;