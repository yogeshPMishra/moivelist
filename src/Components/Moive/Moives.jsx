import React from 'react'
import './Moives.css'
function Moives(props) {
  return (
        <div className='card'>
            <div className="poster">
                <img src={props.image} alt=""/>
            </div>
            <h4>Title : {props.title}</h4>
            <p>Year : {props.year}</p>
            <p>Genre: {props.genre} </p>
            <p>Language: {props.language}</p>
            <p>imdbVotes : {props.imdbVotes}</p>
        </div>
  )
}

export default Moives