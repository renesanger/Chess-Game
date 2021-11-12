import React, { Component } from "react";
import Chessboard from '../Chessboard/Chessboard';
import "./home.css"

export default class Home extends Component {
    render(){
        const data =
        [
            {moveno: "1",
            start: "c2",
            end: "c4"},
            {moveno: "2",
            start: "g7",
            end: "g5"},
            {moveno: "3",
            start: "d2",
            end: "d3"},
            {moveno: "4",
            start: "e2",
            end: "e4"},
            {moveno: "1",
            start: "c2",
            end: "c4"},
            {moveno: "2",
            start: "g7",
            end: "g5"},
            {moveno: "3",
            start: "d2",
            end: "d3"},
            {moveno: "4",
            start: "e2",
            end: "e4"},
            {moveno: "1",
            start: "c2",
            end: "c4"},
            {moveno: "2",
            start: "g7",
            end: "g5"},
            {moveno: "3",
            start: "d2",
            end: "d3"},
            {moveno: "4",
            start: "e2",
            end: "e4"},
            {moveno: "1",
            start: "c2",
            end: "c4"},
            {moveno: "2",
            start: "g7",
            end: "g5"},
            {moveno: "3",
            start: "d2",
            end: "d3"},
            {moveno: "4",
            start: "e2",
            end: "e4"},
        ];

        const listItems = data.map((d) => 
        <tr>
            
            <th scope="row">{d.moveno}</th>
            <th>{d.start}</th>
            <th>{d.end}</th>

        </tr>
      );

      const messages = [{username:"Rene",message:"I could have eaten your queen, but today I choose peace not war"},
      {username:"John",message:"That's very nice of you, but I choose to win."},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"Conversation conversation conversation"},
      {username:"John",message:"This is temp data that displays conversation"},
      {username:"Rene",message:"This is temp data that displays conversation"}
    ]

    const messageList = messages.map((d) => 


    <div style={{fontSize:"14pt"}}>
        <span style={{marginRight:"10px"}}>{d.username}:</span>
        <span>{d.message}</span>
    </div>

  
  );

        return (
        <div className="home" style={{display:"flex"}}>
            <div className="auth-wrapper" style={{flexGrow:"1"}}>
                <Chessboard></Chessboard>
            </div>
            <div style={{width: "25%", margin:"3.5% 1% 1% 0px", borderRadius:".5em",backgroundColor:"#2E4272"}}>
                <div style={{width: "100%",height:"100%", margin:"7% 5%"}}>
                    <div class="border border-dark" style={{display: "flex", backgroundColor:"#7887AB", height:"10%",width:"90%"}}> 
                        <div  style={{margin: "3%"}}>
                        <h3>Rene_User</h3>
                        <h4>Elo: 2001</h4>
                        </div>
                        <div  class="border-left border-dark" style={{padding: "5.5% 9.5%", border:"1px"}}>
                        <h1>Timer: 02:36</h1>
                        </div>
                    </div>
                    <div class="overflow-auto" style={{backgroundColor:"#7887AB", height:"35%",width:"90%", margin:"1% 0 1%"}}> 
                        <table class=" table table-striped ">
                            <thead >
                                <tr>
                                    <th scope="col">Move</th>
                                    <th scope="col">Piece 1</th>
                                    <th scope="col">Piece 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listItems}
                            </tbody>
                        </table>
                    </div>
                    <div class="border border-dark" style={{display: "flex", backgroundColor:"#7887AB", height:"10%",width:"90%"}}> 
                        <div  style={{margin: "3%"}}>
                        <h3>John_User</h3>
                        <h4>Elo: 2568</h4>
                        </div>
                        <div  class="border-left border-dark" style={{padding: "5.5% 9.5%", border:"1px"}}>
                        <h1>Timer: 03:6</h1>
                        </div>
                    </div> 
                    <div class="border border-dark text-wrap text-break overflow-auto text-left" style={{backgroundColor:"#7887AB",height:"25%",width:"90%",margin:"10% 0 1%"}}>
                        {messageList}
                    </div>
                    <div style={{backgroundColor:"#7887AB",width:"90%"}}>
                        
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Chat..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-dark" type="button">Send</button>
                        </div>
                    </div>

                    </div>    
                </div>

            </div>
            
        </div>)
    }
}