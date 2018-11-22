import React, {Component} from "react";

class CheckboxReply extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleAnswerSubmit();
    }

    render() {
        const replies = this.props.replies.map((reply) => {
                return ([
                        <input key={reply.id} type="checkbox"/>,
                        <label>{reply.content}</label>,
                        <br/>]
                )
            }
        );
        return (
            <form onSubmit={this.handleSubmit}>
                {replies}
                <input type="submit"/>
            </form>)
    }
}

export default CheckboxReply;