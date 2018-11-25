import React, {Component} from 'react';
import './App.css';
import MessageProvider from "./message/MessageProvider";
import QuestionManager from "./question/QuestionManager"
import MessageEnum from "./enum/Messages";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
            currentQuestion: null,
            questionsLength: null,
            answers: []
        };

        fetch("https://localhost:44329/api/questions")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    questions: response,
                    currentQuestion: 0
                })
            })
            .catch(error => console.log(error));

        this.handleCheckboxAnswersSubmit = this.handleCheckboxAnswersSubmit.bind(this);
        this.handleRadioAnswerSubmit = this.handleRadioAnswerSubmit.bind(this);
        this.handleOpenAnswerSubmit = this.handleOpenAnswerSubmit.bind(this);
        this.incrementCurrentQuestion = this.incrementCurrentQuestion.bind(this);
        this.saveAnswers = this.saveAnswers.bind(this);
    }

    handleCheckboxAnswersSubmit(answers){
        this.setState(
            prevState => ({
                answers: [...prevState.answers, ...answers]
            })
        );
        this.incrementCurrentQuestion();
    }

    handleRadioAnswerSubmit(answer){
        this.setState(
            prevState => ({
                answers: [...prevState.answers, answer]
            })
        );
        this.incrementCurrentQuestion();
    }

    handleOpenAnswerSubmit(answer){
        this.setState(
            prevState => ({
                answers: [...prevState.answers, answer]
            })
        );
        this.incrementCurrentQuestion();
    }

    incrementCurrentQuestion(){
        this.setState(
            prevState => {
                return {currentQuestion: prevState.currentQuestion + 1}
            }
        );
    }

    saveAnswers(){
        console.log("Starting POST>:...");
        fetch("https://localhost:44329/api/answers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.answers)
        });
        console.log("ENDING POST>:...");
    }

    render() {
        if (this.state.questions == null) {
            return <MessageProvider key='msgProvider' message={MessageEnum.Loading}/>
        }

        if (this.state.questions[this.state.currentQuestion] === undefined) {
            if(this.state.currentQuestion !== 0){
                return([
                    <MessageProvider key='msgProvider' message={MessageEnum.End}/>,
                    <button key={'saveButton'} onClick={this.saveAnswers}> Zapisz odpowiedzi </button>
                ])
            } else {
                return <MessageProvider key='msgProvider' message={MessageEnum.GeneralError}/>
            }
        }

        return (
            <div>
                <QuestionManager key='questionManager' question={this.state.questions[this.state.currentQuestion]}
                                 handleCheckboxAnswersSubmit={this.handleCheckboxAnswersSubmit}
                                 handleRadioAnswerSubmit={this.handleRadioAnswerSubmit}
                                 handleOpenAnswerSubmit={this.handleOpenAnswerSubmit}
                />
            </div>
        );
    }
}

export default App;
