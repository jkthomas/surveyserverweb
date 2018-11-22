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
                    <RadioReply replies={this.props.question.replies}
                                handleAnswerSubmit={this.props.handleAnswerSubmit}/>
                );
            case 2:
                return (
                    <RadioReply replies={this.props.question.replies}
                                handleAnswerSubmit={this.props.handleAnswerSubmit}/>
                );
            case 3:
                return (
                    <OpenReply handleAnswerSubmit={this.props.handleAnswerSubmit}/>
                );
            case 4:
                return (
                    <CheckboxReply replies={this.props.question.replies}
                                   handleAnswerSubmit={this.props.handleAnswerSubmit}/>
                );
            default:
                return (
                    <MessageProvider message={MessageEnum.Error}/>
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