import React from 'react'

const Profile = () => {
    return (
        <div className="container mt-5 bg-light shadow-sm p-0">
            <div className="d-inline-block px-5 py-2 fw-bold text-white fs-4" style={{ background: 'linear-gradient(to right, #9d00ff, #4e00ff)', minWidth: 300 }}>
                Profile
            </div>
            <div className="p-4">
                <div className="row align-items-start mb-5">
                    <div className="col-md-2 text-center">
                        <img src="https://via.placeholder.com/120" className="rounded-circle bg-secondary-subtle img-fluid" alt="Avatar" />
                    </div>
                    <div className="col-md-10">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label text-secondary small mb-0">Email</label>
                                <input type="text" className="form-control border-0 bg-light" placeholder="email" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-secondary small mb-0">name</label>
                                <input type="text" className="form-control border-0 bg-light" placeholder="name" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-secondary small mb-0">Phone</label>
                                <input type="text" className="form-control border-0 bg-light" placeholder="phone" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label text-secondary small mb-0">password</label>
                                <input type="password" className="form-control border-0 bg-light" placeholder="password" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center pt-3">
                                <span className="me-3 text-secondary">Gender</span>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input border-primary" type="radio" name="g" id="m" defaultChecked />
                                    <label className="form-check-label small" htmlFor="m">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input border-primary" type="radio" name="g" id="f" />
                                    <label className="form-check-label small" htmlFor="f">Female</label>
                                </div>
                            </div>
                            <div className="col-md-6 text-end pt-3">
                                <button className="btn btn-primary rounded-pill px-5 fw-bold shadow-sm" style={{ backgroundColor: '#6610f2', border: 'none' }}>
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex border-bottom mb-4">
                    <div className="px-4 py-2 border-bottom border-3 border-danger text-danger fw-bold" style={{ cursor: 'pointer' }}>
                        Order history
                    </div>
                    <div className="px-4 py-2 text-dark fw-bold" style={{ cursor: 'pointer' }}>
                        Favourite
                    </div>
                </div>
                <div className="order-list">
                    <div className="mb-5">
                        <p className="text-danger fw-semibold mb-2">+ Orders have been placed on 09 - 19 - 2020</p>
                        <div className="table-responsive">
                            <table className="table align-middle text-center">
                                <thead className="table-secondary text-secondary">
                                    <tr>
                                        <th>id</th>
                                        <th>img</th>
                                        <th>name</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><img src="https://via.placeholder.com/50" className="img-thumbnail border-0" alt="shoe" /></td>
                                        <td>Product 1</td>
                                        <td>1000</td>
                                        <td><span className="bg-light border px-3 py-1 text-secondary">1</span></td>
                                        <td>1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <p className="text-danger fw-semibold mb-2">+ Orders have been placed on 09 - 19 - 2020</p>
                        <div className="table-responsive">
                            <table className="table align-middle text-center">
                                <thead className="table-secondary text-secondary">
                                    <tr>
                                        <th>id</th>
                                        <th>img</th>
                                        <th>name</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                        <th>total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><img src="https://via.placeholder.com/50" className="img-thumbnail border-0" alt="shoe" /></td>
                                        <td>Product 1</td>
                                        <td>1000</td>
                                        <td><span className="bg-light border px-3 py-1 text-secondary">1</span></td>
                                        <td>1000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile