import React, {Component} from 'react';

class QuestionParser extends Component {
    createRenderData(question) {
        this.renderData = [];
        this.renderData.push(<h2>{question.content}</h2>);
        question.replies.map(reply => {
            this.renderData.push(<p>{reply.content}</p>);
            return true;
        });

        return this.renderData
    }
}

export default QuestionParser;