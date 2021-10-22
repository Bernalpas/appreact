
import React from 'react';


export function Navegacion () {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a target="...blank" className="navbar-brand" href="https://capacitarte.org">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a target="...blank" className="nav-link active" aria-current="page" href="https://capacitarte.org">Home</a>
                        </li>
                        <li className="nav-item">
                            <a target="...blank" className="nav-link" href="https://capacitarte.org">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a target="...blank" className="nav-link dropdown-toggle" href="https://capacitarte.org" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Dropdown</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a target="...blank" className="dropdown-item" href="https://capacitarte.org">Action</a>
                                    </li>
                                    <li>
                                        <a target="...blank" className="dropdown-item" href="https://capacitarte.org">Another action</a>
                                    </li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>
                                        <a target="...blank" className="dropdown-item" href="https://capacitarte.org">Something else here</a>
                                    </li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <a target="...blank" className="nav-link disabled" href="https://capacitarte.org">Disabled</a>
                        </li>
                    </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    )    
}

