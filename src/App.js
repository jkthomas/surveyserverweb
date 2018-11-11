import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            questions: null
        };

        this.currentQuestion = 4
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

    render() {
        const {questions} = this.state;

        if (questions == null) {
            return <p>Wczytywanie...</p>
        }

        if(this.currentQuestion < 0 || this.currentQuestion > questions.length - 1){
            return <p>Nie ma wiecej pytan</p>
        }

        return (
            <div>
                <h2>{this.state.questions[this.currentQuestion].content}</h2>
                {this.state.questions[this.currentQuestion].replies.map(reply =>
                    <p>{reply.content}</p>
                )}
            </div>
        );
    }

}

export default App;
