import React from 'react'
import Tile from '../Tile/Tile'
import './Chessboard.css'


const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


export default function Chessboard()
{

    let board = [];
    let image = "";
    for(let i =verticalAxis.length-1; i>=0 ; i--){
        for (let j = 0; j<horizontalAxis.length;j++){
            const number = j + i + 2;
            
            if(i>=6 || i<=2 ){
                if(i==1)
                {
                    image = "images/pawn_w.png";
                }
                else if(i == 6){
                    image = "images/pawn_b.png";
                }
                else if(i==0 || i == 7){
                    const type = i=== 0 ? "w":"b";

                    if(j==0 || j==7){
                        image = `images/rook_${type}.png`;
                    }
                    else if(j==1 || j==6){
                        image = `images/knight_${type}.png`;
                    }
                    else if(j==2 || j==5){
                        image = `images/bishop_${type}.png`;
                    }
                    else if(j==4 ){
                        image = `images/king_${type}.png`;
                    }
                    else if(j==3 ){
                        image = `images/queen_${type}.png`;
                    }
                }
                else{
                    image="";
                }
            }
            else{
                image="";
            }

            board.push(<Tile image = {image}  number = { j+i+2 } cell={horizontalAxis[j]+""+verticalAxis[i]}/>);
            
        }
    } 


    console.log(board);
    return <div id = "chessboard"> {board} </div>
}