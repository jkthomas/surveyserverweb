import {Component} from 'react';

class ApiCaller extends Component{
    constructor(){
        super();
        this.state = {
            response: []
        }
    }

    getEndpointState(endpointUrl) {
        let {state} = [];
        fetch(endpointUrl)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                state = response
            });
        return state;
    };
}

export default ApiCaller;