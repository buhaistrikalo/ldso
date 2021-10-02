import React, {Component} from 'react';
import "./answers.css"

class Answers extends Component {
    state = {
        needPoints: 0,
        userPoints: 0,
    }

    changeNeedPoints(count) {
        this.setState({needPoints: count});
    }

    changePoints(point) {
        let more = this.state.userPoints + point
        this.setState({userPoints: more})

    }

    checkPoints() {
        console.log(this.state.userPoints)
    }

    render() {
        let count = 0

        this.props.answers.forEach((ans) => {
            if (ans.correct) count++;
        });

        if (count <= 1)
            return (
                <label className="quiz__answers-wrapper">
                    {this.props.answers.map((ans, index) =>
                        <div key={index}>
                            <button className="quiz__answers-button"
                                onClick={() => {this.props.updateData(ans.correct)}}
                            >{ans.answer}</button>
                        </div>
                    )}
                </label>
            );
        else
            return (

                <label className="quiz__answers-wrapper">
                    {this.props.answers.map((ans, index) =>
                        <div key={index} >
                            <button className="quiz__answers-button"
                                onClick={() => {
                                    this.changePoints(ans.correct ? 1 : -1)

                                }}
                            >{ans.answer}</button>
                        </div >
                    )}
                    <button onClick={() => {this.checkPoints()}} className="quiz__answers-button quiz__answers-button-submit">Отправить</button>
                </label>


                // <form onSubmit={this.changePoints()}>
                //     <label className="quiz__answers-wrapper">
                //         {this.props.answers.map((ans, index) =>
                //             <div key={index} >
                //                 <button className="quiz__answers-button"
                //                     onClick={() => {this.changePoints(ans.correct ? 1 : -1)}}
                //                 >{ans.answer}</button>
                //             </div >
                //         )}
                //         <input type="submit" className="quiz__answers-button quiz__answers-button-submit" value="Отправить" />
                //     </label>
                // </form>
            );
    }
}

export default Answers;
