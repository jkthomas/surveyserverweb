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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState(
            prevState => {
                return {currentQuestion: prevState.currentQuestion + 1}
            }
        );
    }

    render() {
        if (this.state.questions == null) {
            return <MessageProvider message={MessageEnum.Loading}/>
        }

        if (this.state.questions[this.state.currentQuestion] === undefined) {
            return <MessageProvider message={MessageEnum.End}/>
        }

        return (
            <div>
                <QuestionManager question={this.state.questions[this.state.currentQuestion]}
                                 handleAnswerSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
