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
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"/>
                <input type="submit"/>
            </form>)
    }
}

export default CheckboxReply;