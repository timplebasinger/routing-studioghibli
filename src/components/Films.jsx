import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => setFilms(films))
            .catch(err => console.log(err))
    }, [])

    return (
        <main className="container">
        <section className="row justify-content-center mt-5">
            {films.map(film => (
                <div className="col-6" key={`film-card-${film.id}`}>
                    <div className="card shadow-lg p-3  my-2">
                        <div className="card-body">
                            <img src={film.movie_banner} alt="poster from movie" class="card-img-top" />
                            <h4 className="card-title">{film.title}</h4>
                            <p className="card-subtitle text-muted">Director: {film.director}</p>
                            <p className="card-text">Release date: {film.release_date}</p>
                            <p className="card-text">Rotten Tomates Score: {film.rt_score}</p>
                            <Link to={`/films/${film.id}`} className="btn">Film Info</Link>
                        </div>
                    </div>
                </div>
            ))}
        </section>
        </main>
    );
};

export default Films;