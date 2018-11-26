import React, {Component} from "react";

class CheckboxReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOptionsIds: [],
            checkedOptionsContent: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, replyContent) {
        let checkedOption = event.target;
        if (checkedOption.checked) {
            this.setState(
                prevState => ({
                    checkedOptionsIds: [...prevState.checkedOptionsIds, parseInt(checkedOption.value)],
                    checkedOptionsContent: [...prevState.checkedOptionsContent, replyContent]
                })
            )
        } else {
            this.setState(
                prevState => ({
                    checkedOptionsIds: prevState.checkedOptionsIds.filter((x, value) => value === checkedOption.value),
                    checkedOptionsContent: prevState.checkedOptionsContent.filter((x, content) => content === replyContent)
                })
            )
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Logging for testing purposes only
        //console.log(this.state.checkedOptionsIds.toString());
        //
        const answers = [];
        for (let i=0; i < this.state.checkedOptionsIds.length; i++){
            answers.push({
                questionId: this.props.questionId,
                replyId: this.state.checkedOptionsIds[i],
                replyContent: this.state.checkedOptionsContent[i].toString()
            })
        }

        this.props.handleCheckboxAnswersSubmit(answers);
    }

    render() {
        const replies = this.props.replies.map((reply) => {
            return ([
                <input key={reply.id} type="checkbox" value={reply.id}
                       onChange={event => this.handleChange(event, reply.content)}/>,
                <label key='content'>{reply.content}</label>,
                <br key='breakline'/>
            ])
        });
        return (
            <form key='form' onSubmit={this.handleSubmit}>
                {replies}
                <input key='submit' type="submit"/>
            </form>)
    }
}

export default CheckboxReply;