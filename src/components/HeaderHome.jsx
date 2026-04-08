import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ACCESSTOKEN, USSERLOGIN } from '../util/Config'

const HeaderHome = () => {
    const { gioHang } = useSelector(rootState => rootState.BTGioHangReducer)
    const { userLogin } = useSelector(rootState => rootState.UserLoginReducer)
    const tinhSoLuong = () => {
        return gioHang.reduce((tong, sp) => {
            return tong + (sp.soLuong)
        }, 0)
    }
    const logout = () => {
        localStorage.removeItem(ACCESSTOKEN);
        localStorage.removeItem(USSERLOGIN);
        window.location.href = '/login';
    }
    const renderLogin = () => {
        if (userLogin) {
            return (
                <li className="nav-item d-flex flex-row align-items-center ">
                    <NavLink className="nav-link fw-bold" to="/profile">
                        <i className="fa fa-user border border-dark rounded-circle p-2 fs-5"></i>
                    </NavLink>
                    <NavLink className="nav-link text-primary fw-bold" to="/profile">
                        {userLogin}
                    </NavLink>
                    <button className="btn btn-outline-danger btn-sm ms-2" onClick={logout} style={{ padding: '2px 8px' }}>
                        Logout
                    </button>
                </li>
            );
        }
        return <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-2">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Biti's Store</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/products'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-center gap-3">
                        {renderLogin()}
                        <li className="nav-item">
                            <NavLink to='/cart' className="nav-link d-flex align-items-center p-0">
                                <div className="btn btn-outline-secondary position-relative">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {tinhSoLuong()}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default HeaderHome