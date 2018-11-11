import ApiCaller from '../call/ApiCaller.js';
import QuestionParser from '../parse/QuestionParser.js';

class QuestionsManager {
    constructor(){
        this.apiCaller = new ApiCaller();
        this.questionParser = new QuestionParser();
    }

    getAllQuestionsHtml(){
        let htmlData = [];
        let state = this.apiCaller.getEndpointState("https://localhost:44329/api/questions");
        state.map(question =>
            htmlData.push(this.questionParser.createRenderData(question))
        );

        return htmlData;
    }
}

export default QuestionsManager;