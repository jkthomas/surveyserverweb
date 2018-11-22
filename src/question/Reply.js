import React, {Component} from "react";

class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOption: "0"
        }
    }

    render() {
        const inputType = "radio";
        let index = "0";
        return (
            <form>
                <input type={inputType} value={index}/>
                {this.props.reply.content}<br/>
            </form>
        )
    }
}

export default Reply;