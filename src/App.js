import React, {Component} from 'react';
import './App.css';
import SurveyManager from "./survey/SurveyManager";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surveySubmitted: false
        };
        this.handleSurveySubmit = this.handleSurveySubmit.bind(this);
    }

    handleSurveySubmit() {
        this.setState({
            surveySubmitted: true
        });
    }

    render() {
        if (this.state.surveySubmitted) {
            return (
                <div>
                    Thank you for submitting answers for our survey!
                </div>
            )
        } else {
            return (
                <SurveyManager handleSurveySubmit={this.handleSurveySubmit}/>
            );
        }
    }
}

export default App;
