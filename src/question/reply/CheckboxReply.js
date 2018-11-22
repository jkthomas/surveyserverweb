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

    handleChange(e) {
        let checkedOption = e.target;
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

    handleSubmit(e) {
        e.preventDefault();
        //TODO: Logging for testing purposes only
        console.log(this.state.checkedOptions.toString());
        //
        this.props.handleSingleAnswerSubmit();
    }

    render() {
        const replies = this.props.replies.map((reply) => {
            return (
                <form>
                    <input key={reply.id} type="checkbox" value={reply.id} onChange={e => this.handleChange(e)}/>
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

export default CheckboxReply;