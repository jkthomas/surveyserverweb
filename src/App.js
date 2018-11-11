import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            questions: [{}],
            currentQuestionIndex: 0
        };
    }

    componentDidMount() {
        fetch("https://localhost:44329/api/questions")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    questions: response
                })
            });
    }

    render() {
        return (
            <div>
                <h2>{this.state.questions[0].content}</h2>
                {/*<p>{this.state.questions[0].replies[0].content}</p>*/}
            </div>
        );
    }

}

export default App;
