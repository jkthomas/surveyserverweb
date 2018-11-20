import React, {Component} from "react";
import ReplyManager from "./ReplyManager";

class QuestionManager extends Component {

    render() {
        return (
            <div>
                {this.props.question.content}
                <ReplyManager key={this.props.question.id} replies={this.props.question.replies} buttonClick={() => {this.props.buttonClick()}}/>
            </div>
        )
    }
}

export default QuestionManager;