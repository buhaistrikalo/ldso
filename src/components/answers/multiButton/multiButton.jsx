import React, {Component} from 'react';

class Multibutton extends Component {
    state = {
        active: false
    };


    render() {
        return (

            <button className={!this.state.active ? "button" : "button quiz__answers-button_active"}
                onClick={() => {
                    this.setState({active: this.state.active ? false : true})
                    this.props.changePoints(this.props.data.correct
                        ? this.state.active
                            ? -1 : 1
                        : this.state.active
                            ? 1 : -1)

                }}
            >{this.props.data.answer}</button>

        );
    }
}

export default Multibutton;
