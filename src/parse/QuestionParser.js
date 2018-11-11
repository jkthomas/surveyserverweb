import React, {Component} from 'react';

class QuestionParser extends Component {
    constructor(question){
        super();
        this.state = {
            content: question.content,
            replies: [{}]
        }
    }
    componentDidMount() {
        this.setState({
            replies: this.state.question.replies
        })
    }

    render() {
        this.renderData = [{}];
        this.renderData.push(<h2>{this.state.content}</h2>);
        this.renderData.push(<p>{this.state.replies[0].content}</p>);

        return this.renderData
    }
}

export default QuestionParser;