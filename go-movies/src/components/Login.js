import React, { Component, Fragment } from 'react'
import Input from './form-components/Input';
import Alert from './form-components/ui-components/Alert';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null,
            errors: [],
            alert: {
                type: "d-none",
                message: "",
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (evt) => {
        let value = this.target.value;
        let name = this.target.name;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    hasError(key) {
        return this.state.errors.indexOf(key) !== -1;
    }

    render() {
        return (
            <Fragment>
                <h2>Login</h2>
                <hr />
                <Alert
                    alertType={this.state.alert.type}
                    alertMessage={this.state.alert.message}
                />

                <form className="pt-3" onSubmit={this.handleSubmit}>
                    <Input
                        title={"Email"}
                        type={"email"}
                        name={"email"}
                        handleChange={this.handleChange}
                        className={this.hasError("email") ? "is-invalid" : ""}
                        errorDiv={this.hasError("email") ? "text-danger" : "d-none"}
                        errorMsg={"Please enter a valid mail address"}
                    />

                    <Input
                        title={"Password"}
                        type={"password"}
                        name={"password"}
                        handleChange={this.handleChange}
                        className={this.hasError("password") ? "is-invalid" : ""}
                        errorDiv={this.hasError("password") ? "text-danger" : "d-none"}
                        errorMsg={"Please enter a password"}
                    />

                    <hr/>

                    <button className="btn btn-primary">Login</button>
                </form>
            </Fragment>
        );
    }
}