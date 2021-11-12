import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        }

        // axios.post('http://httpbin.org/post', data)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        fetch(`http://httpbin.org/post`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() => {
                console.log(data)
            })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    

    render() {
        return (
        <div className="auth-inner">
            <form onSubmit={this.handleSubmit}> 
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" 
                        onChange={e => this.username = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                        onChange={e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                        onChange={e => this.password = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                        onChange={e => this.confirmPassword = e.target.value}/>
                </div>

                <button className="btn btn-dark btn-block">Sign Up</button>
            </form>
        </div>
        )
    }
}