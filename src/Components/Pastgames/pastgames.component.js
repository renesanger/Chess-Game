import React, {Component} from 'react';
import "./pastgames.css"
import Pagination from '../Pagination/pagination.component';

export default class Pastgames extends Component {
    
    render() {
      const data =
        [{
            "gameno":"1",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
            {"gameno":"2",
            "player":"Mark",
            "elo":"2586",
            "result":"Win",
            "nationality":"Spain",
            "color":"Black",
            "duration":"30:21",
            "moves":"36",
            "date":"10/31/2021"},
        
        ];
    const listItems = data.map((d) => 


        <tr key={d.name} >
            
        <th scope="row">{d.gameno}</th>
        <th>{d.player}</th>
        <th>{d.elo}</th>
        <th>{d.result}</th>
        <th>{d.nationality}</th>
        <th>{d.color}</th>
        <th>{d.duration}</th>
        <th>{d.moves}</th>
        <th>{d.date}</th>

        </tr>

      
      );
        return (
            <div className="body">
                <div className="sorting-box">
                    <div style={{margin:"1%"}}>
                        <h3 style={{marginTop:"20px"}}>Search Game History</h3>
                        <h4>Search For a Completed Game</h4>
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
                              <input type="text" class="form-control" id="eloMin" placeholder="Min"
                              onChange={e => this.eloMin = e.target.value} />
                            </div>
                            <label for="eloMax" class="col-sm-5 col-form-label-lg"> {"<"} Elo Ranking {"<"}  </label>
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMax" placeholder="Max"
                              onChange={e => this.eloMax = e.target.value} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMin" placeholder="Date From"
                              onChange={e => this.eloMin = e.target.value} />
                            </div>
                            <label for="eloMax" class="col-sm-5 col-form-label-lg"> {"<"} Date Played {"<"}  </label>
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMax" placeholder="Date To"
                              onChange={e => this.eloMax = e.target.value} />
                            </div>
                          </div>

                          <div class="form-group row">
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMin" placeholder="Min"
                              onChange={e => this.eloMin = e.target.value} />
                            </div>
                            <label for="eloMax" class="col-sm-5 col-form-label-lg"> {"<"} Total Moves {"<"}  </label>
                            <div class="col-sm-3">
                              <input type="text" class="form-control" id="eloMax" placeholder="Max"
                              onChange={e => this.eloMax = e.target.value} />
                            </div>
                          </div>


                          <div class="form-group row">
                          <label class="col-form-label-lg col-sm-4" for="inlineFormCustomSelectPref">Game Result</label>
                            <select class="custom-select col-sm-6" id="inlineFormCustomSelectPref">
                              <option selected>Choose...</option>
                              <option value="online">Win</option>
                              <option value="offline">Loss</option>
                              <option value="allusers">Draw</option>
                            </select>
                            </div>

                          <button className="btn btn-dark">Search</button>
                      </form>
                    </div>  
                </div>
                <div className="gamehistory ">
                    {/* {listItems} */}
                    <table class="table table-striped table-hover">
                    <thead >
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Players</th>
                        <th scope="col">Elo Ranking</th>
                        <th scope="col">Game Result</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Color</th>

                        <th scope="col">Duration</th>
                        <th scope="col">Moves</th>

                        <th scope="col">Date Played</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                    </table>
                    <div className=" ">
                      <Pagination></Pagination>
                    </div>
                    
                </div>
            </div>
        )
    }
}