import React, {Component} from "react";
import RadioReply from "./reply/RadioReply";
import OpenReply from "./reply/OpenReply";
import MessageProvider from "../message/MessageProvider";
import MessageEnum from "../enum/Messages";
import CheckboxReply from "./reply/CheckboxReply";

class QuestionManager extends Component {
    // noinspection JSMethodCanBeStatic
    getRepliesComponent(inputType) {
        switch (inputType) {
            case 1:
                return (
                    <RadioReply key={this.props.question.id}
                                replies={this.props.question.replies}
                                questionId={this.props.question.id}
                                handleRadioAnswerSubmit={this.props.handleRadioAnswerSubmit}/>
                );
            case 2:
                return (
                    <RadioReply key={this.props.question.id}
                                replies={this.props.question.replies}
                                questionId={this.props.question.id}
                                handleRadioAnswerSubmit={this.props.handleRadioAnswerSubmit}/>
                );
            case 3:
                return (
                    <OpenReply key={this.props.question.id}
                               handleOpenAnswerSubmit={this.props.handleOpenAnswerSubmit}
                               questionId={this.props.question.id}/>
                );
            case 4:
                return (
                    <CheckboxReply key={this.props.question.id}
                                   replies={this.props.question.replies}
                                   questionId={this.props.question.id}
                                   handleCheckboxAnswersSubmit={this.props.handleCheckboxAnswersSubmit}/>
                );
            default:
                return (
                    <MessageProvider key='msgProvider' message={MessageEnum.ReplyLoadingError}/>
                );
        }
    }

    render() {
        const repliesComponent = this.getRepliesComponent(this.props.question.type);
        return (
            <div>
                {this.props.question.content}
                {repliesComponent}
            </div>
        )
    }
}

export default QuestionManager;