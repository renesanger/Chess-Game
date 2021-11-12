import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="auth-inner">
                <form onSubmit={this.handleSubmit}> 
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" 
                            onChange={e => this.firstName = e.target.value} />
                    </div>


                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"
                            onChange={e => this.password = e.target.value} />
                    </div>

                    <button className="btn btn-dark btn-block">Log In</button>
                </form>
            </div>
        )
    }
}