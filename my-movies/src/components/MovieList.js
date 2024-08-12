import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList =(props)=> {
  //css
  const badgeStyle = {
    backgroundColor: 'blue',
    color: 'white',
    marginLeft: '80px',
    marginTop: '10px',
    alignItems: 'center',
    opacity: '60%'
  };
  const cardStyle={
    width:'250px'
    
  };
  const colStyle={
    width:'auto'
  };

    return (
      <div className="row" style={{width:'100%', gap:'5px'}}>

        {props.movies.map((movie) => (
          <div className="col-lg-4" key={movie.id} style={colStyle} >
            <div className="card mp-4 shadow-sm" style={cardStyle}>
              <img src={movie.imageURL}className="card-img-top" alt="Sample Movies" />
              <div className="card-body">
                <h5 className="card-title">{movie.name.substring(0, 30)}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="d-flex justify-contant-between align-items-center">
                  <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                  <h2><span className="badge badge-info" style={badgeStyle}>{movie.rating}</span></h2>
                </div>
              </div>
            </div>
          </div>
        ))}



        
      </div>
    )
  
}

export default MovieList;