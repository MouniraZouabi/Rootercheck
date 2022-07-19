import React from 'react'
import {useParams} from 'react-router-dom'
import './MovieDetails.css'
import {Link} from 'react-router-dom'

import {Card , Button}from 'react-bootstrap'
const MovieDetails = ({movies}) => {
   // console.log(movies);
let {id}  = useParams();
//console.log(id,"id");

let selectedMovie= movies.filter((movie)=> movie.id === id )

  return (
    <div style={{width :"40em" , paddingLeft :"30%", marginTop:"1%" }}> 

   <Card className="bg-dark text-white" style={{width :"40em" , paddingLeft :"10%"}}>
      <Card.Header style ={{fontFamily:"cursive" , color :"gold" , backgroundColor :"grislight"}}>{selectedMovie[0].title}</Card.Header>
      <Card.Body >
        <Card.Title>
<iframe
          width="560"
          height="315" 
          title=" "
          src={selectedMovie[0].trailer}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        </Card.Title>
        <Card.Text>
         <h6 style ={{fontFamily:"" , color :"white" }}>{selectedMovie[0].description} </h6>
        </Card.Text>

        <Link to ="/">
        <Button variant="warning">Back Home</Button>
        </Link>

      </Card.Body>
    </Card>

       
  </div>


















  )
}
export default MovieDetails
