import React,{ Component}  from "react";
import logo from '../../../logo.svg';
import './style.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.onloginButtonClick.bind(this);
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
                    onClick={()=>{
                        this.onloginButtonClick()
                    }}>Login</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log('props  ',this.props);
    }
    onloginButtonClick(){
        console.log('dfasdf',this.props.history);
        this.props.history.push('home');
    }
}
export default Login;