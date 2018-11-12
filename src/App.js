import React, {Component} from 'react';
import './App.css';
import MessageProvider from "./message/MessageProvider";
import MessageEnum from "./enum/Messages";
import QuestionType from "./enum/QuestionType";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            questions: null
        };

        this.currentQuestion = 0;
        this.renderNextQuestion = this.renderNextQuestion.bind(this);
    }

    componentDidMount() {
        fetch("https://localhost:44329/api/questions")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    questions: response
                })
            })
            .catch(error => console.log(error));
    }

    renderNextQuestion() {
        this.currentQuestion += 1;
        this.forceUpdate()
    }

    getInputType(questionTypeNumber) {
        switch (questionTypeNumber) {
            case QuestionType.Undefined:
                return null;
            case QuestionType.YesNo:
                return "radio";
            case QuestionType.Closed:
                return "radio";
            case QuestionType.Opened:
                return "text";
            case QuestionType.Multiple:
                return "checkbox";
            default:
                return null
        }
    }

    render() {
        const {questions} = this.state;
        if (questions == null) {
            return <MessageProvider message={MessageEnum.Loading}/>
        }

        if (this.currentQuestion < 0 || this.currentQuestion > questions.length - 1) {
            return <MessageProvider message={MessageEnum.End}/>
        }

        const questionTypeNumber = this.state.questions[this.currentQuestion].type;
        const repliesType = this.getInputType(questionTypeNumber);

        return (
            <div>
                <h2>{this.state.questions[this.currentQuestion].content}</h2>
                <form>
                    {this.state.questions[this.currentQuestion].replies.map(reply => {
                            let renderData = [];
                            renderData.push(<input type={repliesType} value={reply.content}/>);
                            renderData.push(reply.content);
                            renderData.push(<br/>);
                            return renderData
                        }
                    )}
                </form>
                <button className="nextQuestion" onClick={this.renderNextQuestion}>Next question</button>
            </div>
        );
    }
}

export default App;
