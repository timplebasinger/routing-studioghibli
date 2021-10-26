import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const SingleFilm = (props) => {
    const [film, setFilm] = useState({});
    const { filmid } = useParams();

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setFilm(data))
            .catch(err => console.log(err))
    }, [filmid])

    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className="col-3" key={`${film.id}`}>
                    <div className="card shadow-lg my-2">
                        <div className="card-body">
                            <img src={film.movie_banner} alt="poster from movie" class="card-img-top" />
                            <h4 className="card-title">{film.title}</h4>
                            <p className="card-subtitle text-muted">Director: {film.director}</p>
                            <p className="card-text">Release date: {film.release_date}</p>
                            <p className="card-text">Rotten Tomates Score: {film.rt_score}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SingleFilm;

