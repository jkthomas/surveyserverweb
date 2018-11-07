import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        fetch("https://localhost:44329/api/questions")
            .then(result => result.json())
            .then((data) => {
                this.setState({
                    questions: data
                })
            });
    }

    createRenderData(){
        let htmlQuestions = [];
        const {questions} = this.state;
        questions.map(question => {
            htmlQuestions.push(<h2>{question.content}</h2>);
            return question.replies.map(reply => {
                htmlQuestions.push(<p>{reply.content}</p>);
                return true;
            })
        });

        return htmlQuestions
    }

    render() {
        return (
            <div>
                {this.createRenderData()}
            </div>
        );
    }

}

export default App;
