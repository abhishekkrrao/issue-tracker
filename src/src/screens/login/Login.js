import React from 'react'
import logo from '../../../logo.svg';
import {withRouter} from 'react-router-dom';
class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container">
                <div 
                className="logoContainer">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="inputContainer">
                    <input></input>
                    <input></input>
                </div>
                <div className="buttonContainer">
                    <button
                    onClick={this.onloginButtonClick}>Login</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log('props  ',this.props);
    }
    onloginButtonClick(){
        console.log('dfasdf');
        this.props.history.push('Home');
    }
}
export default withRouter(Login);