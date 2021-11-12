import React, {Component} from 'react';
import "./inbox.css"
import Pagination from '../Pagination/pagination.component';

export default class Lobby extends Component {
    
    render() {
      const data =
      [{"username":"rene",
      "elo":2001,
      "nationality":"Germany",
      "status":"Online"},
      {"username":"john",
      "elo":3000,
      "nationality":"USA",
      "status":"Offline"},
      {"username":"rene",
      "elo":2001,
      "nationality":"Germany",
      "status":"Online"},
      {"username":"john",
      "elo":3000,
      "nationality":"USA",
      "status":"Offline"},
      {"username":"rene",
      "elo":2001,
      "nationality":"Germany",
      "status":"Online"},
      {"username":"john",
      "elo":3000,
      "nationality":"USA",
      "status":"Offline"},
      
    

    ];
    // const listItems = data.map((d) => 
    //   <div className="user-card" style={{backgroundColor:"#a0abc5", width:"98%", margin:"1%", borderRadius:".75em"}} key={d.name}>
    //     <div>Username: {d.username}</div>
    //     <div>Elo Ranking: {d.elo}</div>
    //     <div>Nationality: {d.nationality}</div>
    //     <div>Status: {d.status}</div>

        
    //   </div>
    //   // <li key={d.name}>{d.name}</li>
      
    //   );
        return (
            <div className="inbox-page">
                <div className="inbox-preview" style ={{boxShadow: "0px 1px 2px black"}}>
                    <div style={{margin:"5%"}}>
                        <div>
                            <h2>Game Invitaion From John_user12345</h2>
                            <h5>11/02/2021</h5> 
                            <h4>John_user12345 would like to play a game of chess with you, click play to start a game with him.
                                Invites expire in 48 hours.
                            </h4>
                            <button type="button" class="btn btn-outline-dark">Play Game</button>
                            </div>
                        </div>  
                </div>

                <div className="all-mail" style ={{boxShadow: "0px 1px 2px black"}}>
                <image src={"public/images/mail.png"}/>
                    {data.map((d) => 
                        <div className="" style={{boxShadow: "0px 1px 2px black",backgroundColor:"#a0abc5", width:"98%", margin:"1%", borderRadius:".25em", height:"14%",display:"flex"}} key={d.name}>
                            <div style={{flexGrow: "1"}}>
                                <img style={{height:"80%", marginTop:"4%"}} src={"/images/mail.png"}/>
                            </div>
                            <div style={{flexGrow: "1", margin:"10px"}}>
                            
                            <h2>Game Invitation From John_user12345</h2>
                            
                            <h4>John_user12345 would like to play a game of chess with you...</h4>
                            <h5>11/02/2021</h5> 
                            </div>

                            <div style={{flexGrow: "1", marginTop:"2.5%"}}>
                            <button type="button" class="btn-lg btn-outline-dark">Open</button>
                            <button type="button" class="btn-lg btn-outline-dark">Delete</button>
                            </div>
                            
                        </div>)}

                    <div className=" ">
                      <Pagination></Pagination>
                    </div>
                    
                </div>
            </div>
        )
    }
}