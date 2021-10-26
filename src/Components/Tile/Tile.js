import "./Tile.css"




export default function Tile(props){
//     function handleOnClick()
// {
//     console.log(props.cell);
// }
let curr_piece= "";
function handleOnClick(e)
{
    let n = e.target.getAttribute( 'data');
    if(active){
        curr_piece = props.image;
        e.target.setAttribute( 'data', props.image);
        console.log(e.target.getAttribute( 'data'));
    }
    else{
        e.target.setAttribute( 'src', n)
    }

    active = !active;
    console.log(n);
    console.log(props.cell);

}
let active =true;

    if(props.number % 2 == 0){
        return <div onClick={handleOnClick} className="tile black-tile"><img data={curr_piece} src={props.image}/></div>
    }
    else{
        return <div onClick={handleOnClick} className="tile white-tile"><img data={curr_piece} src={props.image}/></div>
    }
}
// chess/src/Assets/Images/pawn_b.png

// /Users/renesanger/Desktop/chess_client/chess/src/Assets/Images/pawn_b.png