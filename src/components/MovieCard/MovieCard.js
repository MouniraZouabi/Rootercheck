import React from 'react'
import {Card , Button} from "react-bootstrap"
import './MovieCard.css'
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails'
const MovieCard = ({movie}) => {
    return (
        <div>
    <div className ="maincontainer" >
    <div className="thecard" style={{  backgroundColor:"black",borderRadius:"5px"  }}>
    <div className="thefront">
    <h1 style={{color:"gold" , fontFamily:"Georgia"}}>{movie.title}</h1>
    <img src ={movie.posterUrl} height = "450" width="360" />
    <br></br>
        <h2>
            <ReactStars 
             value ={movie.rating}
             className="starcard"
             size={30}
             color1 ={"grey"}
             color2 ={"#ffd700"}
             count={5}
             edit ={false}
             />

            </h2>
            </div>

        <div className="theback">          
        <h1 style ={{fontFamily:"cursive" , color :"black" ,paddingTop:"20%" }}><br></br>
        <br></br>{movie.description}</h1>
        <br>
        </br>
    <Link to ={`/movie/${movie.id}`} >

       <Button variant="warning" size="lg"style ={{fontFamily:"cursive" , color :"black"}}>Trailer</Button>{' '}
       </Link>
    
      </div>
    </div>
        
        </div>
        </div>
  )
}
export default MovieCard