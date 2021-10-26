import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="row">
            {people.map(person => (
                <div className="col-3 mt-2" key={`${person.id}`}>
                    <div className="card ">
                        <h5 class="card-title">Name: {person.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Age: {person.age}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Gender: {person.gender}</h6>
                        <Link to={`/people/${person.id}`} class="card-link">More Info</Link>
                    </div>
                </div>
            ))}
        </div>
    );

};



export default People;