import React, {Component} from 'react';
import "./lobby.css"
import Pagination from "../Pagination/pagination.component.js"


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
      {"username":"rene",
      "elo":2001,
      "nationality":"Germany",
      "status":"Online"},
      {"username":"john",
      "elo":3000,
      "nationality":"USA",
      "status":"Offline"},
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
      {"username":"rene",
      "elo":2001,
      "nationality":"Germany",
      "status":"Online"},
      {"username":"john",
      "elo":3000,
      "nationality":"USA",
      "status":"Offline"}
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
            <div className="lobby">
                <div className="sorting-box" style ={{boxShadow: "0px 1px 2px black"}}>
                    <div style={{margin:"1%"}}>
                        <h3 style={{marginTop:"20px"}}>Find a Chess Game</h3>
                        <h4>Search For a User</h4>
                        <form style ={{width:"86%", margin:"7%"}} onSubmit={this.handleSearch}> 
                        <div class="form-group row">
                            <label for="username" class="col-sm-3 col-form-label-lg">Username</label>
                            <div class="col-sm-6">
                              <input type="text" class="form-control" id="username" placeholder="Username"
                              onChange={e => this.username = e.target.value} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="username" class="col-sm-3 col-form-label-lg">Nationality</label>
                            <div class="col-sm-6">
                              <input type="text" class="form-control" id="nationality" placeholder="Nationality"
                              onChange={e => this.nationality = e.target.value} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMin" placeholder="Elo Min"
                              onChange={e => this.eloMin = e.target.value} />
                            </div>
                            <label for="eloMax" class="col-sm-5 col-form-label-lg"> {"<"} Elo Ranking {"<"}  </label>
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMax" placeholder="Elo Max"
                              onChange={e => this.eloMax = e.target.value} />
                            </div>
                          </div>
                          <div class="form-group row">
                          <label class="col-form-label-lg col-sm-3" for="inlineFormCustomSelectPref">Status</label>
                            <select class="custom-select col-sm-6" id="inlineFormCustomSelectPref">
                              <option selected>Choose...</option>
                              <option value="online">Online</option>
                              <option value="offline">Offline</option>
                              <option value="allusers">All Users</option>
                            </select>
                            </div>

                          <button className="btn btn-dark">Search</button>
                      </form>
                    </div>  
                </div>
                <div className="allusers-box " style ={{boxShadow: "0px 1px 2px black"}}>
                    {data.map((d) => 
      <div className="user" style={{boxShadow: "0px 1px 2px black",backgroundColor:"#a0abc5", width:"98%", margin:"1%", borderRadius:".25em", padding:"30px"}} key={d.name}>
        <img style={{height:" 30%",width: "30%"}} src={"images/profile.png"}/>
        <h2> {d.username}</h2>
        <h5>Elo Ranking: {d.elo}</h5>
        <h5>Nationality: {d.nationality}</h5>
        <h5>Status: {d.status}</h5>
        <button className="btn btn-outline-dark">Invite</button>

        
      </div>)}
                    <div className=" ">
                      <Pagination></Pagination>
                    </div>
                    
                </div>
            </div>
        )
    }
}