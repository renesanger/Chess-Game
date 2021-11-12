import React, {Component} from 'react';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.image = "images/profile.png";
        this.flag = "images/germany.png";
        this.username = "Rene_User";
        this.membersince = "2012";
        this.email = "rene@gmail.com";
        this.nationality = "Germany";
        this.elo = 2001;
    }
    render() {
        return (
            <div className= "profile-card auth-inner">
                <div>
                    <img className="profile_image" src={this.image}/>
                </div>
                <div>
                    <div style={{marginBottom: "50px"}}>
                        <h1>
                            {this.username}
                            
                        </h1>
                        <h5>Member Since: {this.membersince}</h5>
                    </div>
                    
                    <h3>Elo Ranking: {this.elo}</h3>
                    <h3>Email: {this.email}</h3>
                    <h3>Nationality: {this.nationality}
                    <span >
                                <img style={{paddingBottom:"3px", marginLeft:"15px", height: "40px"}} src={this.flag}/>
                            </span>
                    </h3>
                </div>
                <button className="btn btn-secondary" style={{marginTop: "30px"}}>Edit Profile</button>
            </div>
        )
    }
}