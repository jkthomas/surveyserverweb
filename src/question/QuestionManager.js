import React, {Component} from "react";

class QuestionManager extends Component {
    render() {
        return (
            <div>
                {this.props.questionContent.content}
            </div>
        )
    }
}

export default QuestionManager;