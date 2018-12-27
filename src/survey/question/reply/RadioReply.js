import React, {Component} from "react";

class RadioReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedOptionId: this.props.replies[0].id.toString(),
            pickedOptionContent: this.props.replies[0].content.toString()
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, replyContent) {
        let checkedOption = event.target;
        if (checkedOption.checked) {
            this.setState({
                pickedOptionId: checkedOption.value,
                pickedOptionContent: replyContent
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Logging for testing purposes only
        //console.log(this.state.pickedOptionId.toString());
        //
        const answer = {
            questionId: this.props.questionId,
            replyId: parseInt(this.state.pickedOptionId),
            replyContent: this.state.pickedOptionContent.toString()
        };
        this.props.handleRadioAnswerSubmit(answer);
    }

    render() {
        const currentlyPickedOption = this.state.pickedOptionId;
        const replies = this.props.replies.map((reply) => {
            return ([
                <div className="flexOption">
                    <input className="optionInput" key={reply.id} type="radio" value={reply.id}
                           checked={currentlyPickedOption === reply.id.toString()}
                           onChange={event => this.handleChange(event, reply.content)}/>
                    <label className="optionLabel" key='content'>{reply.content}</label>
                </div>,
                <br key='breakline'/>
            ])
        });
        return (
            <form className="flexForm" key='form' onSubmit={this.handleSubmit}>
                {replies}
                <input className="submitButton" key='submit' type="submit"/>
            </form>)
    }
}

export default RadioReply;