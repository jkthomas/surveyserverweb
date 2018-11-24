import React, {Component} from "react";

class CheckboxReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOptions: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let checkedOption = event.target;
        if (checkedOption.checked) {
            this.setState(
                prevState => ({
                    checkedOptions: [...prevState.checkedOptions, checkedOption.value]
                })
            )
        } else {
            this.setState(
                prevState => ({
                    checkedOptions: prevState.checkedOptions.filter((x, value) => value === checkedOption.value)
                })
            )
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //TODO: Logging for testing purposes only
        //console.log(this.state.checkedOptions.toString());
        //
        this.props.handleSingleAnswerSubmit(this.state.checkedOptions[0].toString());
    }

    render() {
        const replies = this.props.replies.map((reply) => {
            return ([
                <input key={reply.id} type="checkbox" value={reply.id} onChange={event => this.handleChange(event)}/>,
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