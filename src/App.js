import React, {Component} from 'react';
import './App.css';
import MessageProvider from "./message/MessageProvider";
import MessageEnum from "./enum/Messages";

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

    renderNextQuestion(){
        this.currentQuestion += 1;
        this.forceUpdate()
    }

    render() {
        const {questions} = this.state;

        if (questions == null) {
            return <MessageProvider message={MessageEnum.Loading}/>
        }

        if (this.currentQuestion < 0 || this.currentQuestion > questions.length - 1) {
            return <MessageProvider message={MessageEnum.End}/>
        }

        return (
            <div>
                <h2>{this.state.questions[this.currentQuestion].content}</h2>
                {this.state.questions[this.currentQuestion].replies.map(reply =>
                    <p>{reply.content}</p>
                )}
                <button className="nextQuestion" onClick={this.renderNextQuestion}>Next question</button>
            </div>
        );
    }
}

export default App;
