import React, {Component} from 'react';
import './App.css';
import MessageProvider from "./message/MessageProvider";
import MessageEnum from "./enum/Messages";
import QuestionType from "./enum/QuestionType";
import Answer from "./entity/Answer";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            questions: null
        };

        this.currentQuestion = 0;
        this.answers = [];
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

    handleAnswerSubmitting = (e) => {
        const {question} = this.state.questions[this.currentQuestion];
        const currentAnswer = new Answer(
            question.id,
            question.type,

        );
        this.answers.push(currentAnswer);
        this.currentQuestion += 1;
        this.forceUpdate()
    };

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
                <form onSubmit={this.handleAnswerSubmitting}>
                    {this.state.questions[this.currentQuestion].replies.map(reply => {
                            let renderData = [];
                            renderData.push(<input type={repliesType} value={reply.content}/>);
                            renderData.push(reply.content);
                            renderData.push(<br/>);
                            return renderData
                        }
                    )}
                </form>
                TODO: Manage assigning values to answers array with onChange property
                <button className="nextQuestion" onClick={this.renderNextQuestion}>Next question</button>
            </div>
        );
    }
}

export default App;
