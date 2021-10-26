import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <nav class="nav">
                <form class="container col-4">
                    <button class="btn me-2" type="button">
                        <Link class="nav-link active" to={"/"}>Home</Link>
                        </button>

                    <button class="btn btn-outline me-2" type="button">
                    <Link class="nav-link" to={"/films"}>View Films</Link>
                        </button>

                    <button class="btn btn-outline me-2" type="button">
                    <Link class="nav-link" to={"/people"}>View Stars</Link>
                        </button>

                </form>
            </nav>
        </nav>
    )
}

export default Navbar