import React, {Component} from "react";

class OpenReply extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            answer: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Logging for testing purposes only
        console.log(this.state.answer.toString());
        //
        this.props.handleSingleAnswerSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={event => this.handleChange(event)}>
                <input type="text"/>
                <input type="submit"/>
            </form>)
    }
}

export default OpenReply;