import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-2">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Biti's Store</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <NavLink to='/cart' className="btn btn-outline-secondary btn-lg d-flex align-items-center">
                        <i className="fa-solid fa-cart-shopping me-2"></i>
                        
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}

export default HeaderHome