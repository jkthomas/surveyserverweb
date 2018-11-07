import React, {Component} from 'react';
import './App.css';
import QuestionsManager from "./manager/QuestionsManager";

class App extends Component {
    constructor() {
        super();
        this.questionManager = new QuestionsManager();
        this.renderData = [];
    }

    componentDidMount() {
        this.renderData = this.questionManager.getAllQuestionsHtml();
    }

    render() {
        return (
            <div>
                {this.renderData}
            </div>
        );
    }

}

export default App;
