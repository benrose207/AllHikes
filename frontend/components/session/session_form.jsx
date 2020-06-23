import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    loginDemo(e) {
        e.preventDefault();

        const demoUser = { email: "demo@allhikes.com", password: "123qwe"};

        debugger
        if (this.props.submitText === "Sign up") {
            this.props.login(demoUser);
        } else {
            this.props.processForm(demoUser);
        }
    }

    render () {
        const { 
            formTitle, 
            submitText, 
            secondaryActionText,
            secondaryActionLink 
        } = this.props;

        const additionalFields = (submitText === "Sign up" ? (
            <>
                <label>
                    <input 
                        type="text"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={this.handleInput("first_name")}
                    />
                </label>
                <label>
                    <input 
                        type="text"
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={this.handleInput("last_name")}
                    />
                </label>
            </>
        ) : "" )

        return (
            <div className="session-form">
                <h1>{formTitle}</h1>
                <form onSubmit={this.handleSubmit}>
                    {additionalFields}
                    <label>
                        <input 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                        />
                    </label>
                    <label>
                        <input 
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                        />
                    </label>
                    <button className="primary-cta">{submitText}</button>
                </form>
                <p>{secondaryActionText} {secondaryActionLink}</p>
                <p>Just exploring? Hit the trail as a <button className="inline-link" onClick={this.loginDemo}>demo user</button></p>
            </div>
        )
    }
}

export default SessionForm;