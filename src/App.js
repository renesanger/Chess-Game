import './App.css';
import React from "react";
// import Sidebar from "react-sidebar";
import { Route } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Chessboard from './Components/Chessboard/Chessboard';

 
class App extends React.Component {
  render() {
    return (
      
      
<div id ="app">
   <Chessboard></Chessboard>
  </div>
    );
  }
}

export default App;



