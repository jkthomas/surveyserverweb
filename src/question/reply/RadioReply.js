import React, {Component} from "react";

class RadioReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedOption: this.props.replies[0].id.toString()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let checkedOption = event.target;
        if (checkedOption.checked) {
            this.setState({
                pickedOption: checkedOption.value
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Logging for testing purposes only
        console.log(this.state.pickedOption.toString());
        //
        this.props.handleSingleAnswerSubmit();
    }

    render() {
        const currentlyPickedOption = this.state.pickedOption;
        const replies = this.props.replies.map((reply) => {
            return (
                <form>
                    <input key={reply.id} type="radio" value={reply.id}
                           checked={currentlyPickedOption === reply.id.toString()} onChange={event => this.handleChange(event)}/>
                    {reply.content}
                    <br/>
                </form>
            )
        });
        return (
            <form onSubmit={this.handleSubmit}>
                {replies}
                <input type="submit"/>
            </form>)
    }
}

export default RadioReply;