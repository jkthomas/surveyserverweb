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
            questionsLength: null
        };

        fetch("")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    questions: response,
                    currentQuestion: 0
                })
            })
            .catch(error => console.log(error));

        this.handleSingleAnswerSubmit = this.handleSingleAnswerSubmit.bind(this);
        this.incrementCurrentQuestion = this.incrementCurrentQuestion.bind(this);
    }

    handleCheckboxAnswersSubmit(answers){
        //TODO: Implement
    }

    handleRadioAnswerSubmit(answer){
        //TODO: Implement
    }

    handleOpenAnswerSubmit(answer){
        //TODO: Implement
    }

    handleSingleAnswerSubmit(answer) {
        console.log(answer);
        this.incrementCurrentQuestion();
    }

    incrementCurrentQuestion(){
        this.setState(
            prevState => {
                return {currentQuestion: prevState.currentQuestion + 1}
            }
        );
    }

    render() {
        if (this.state.questions == null) {
            return <MessageProvider key='msgProvider' message={MessageEnum.Loading}/>
        }

        if (this.state.questions[this.state.currentQuestion] === undefined) {
            if(this.state.currentQuestion !== 0){
                return([
                    <MessageProvider key='msgProvider' message={MessageEnum.End}/>,
                    <button key={'saveButton'}> Zapisz odpowiedzi </button>
                ])
            } else {
                return <MessageProvider key='msgProvider' message={MessageEnum.GeneralError}/>
            }
        }

        return (
            <div>
                <QuestionManager key='questionManager' question={this.state.questions[this.state.currentQuestion]}
                                 handleSingleAnswerSubmit={this.handleSingleAnswerSubmit}/>
            </div>
        );
    }
}

export default App;
