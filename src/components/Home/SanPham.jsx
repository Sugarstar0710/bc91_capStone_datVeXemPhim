import React from 'react'

const SanPham = () => {
    return (
        <div className="col-md-4 mt-4">
            <div className="card border-0 shadow-sm" style={{ width: '350px' }}>
                <div className="card__heart position-absolute top-0 end-0 p-3">
                    <i className="bx bxs-heart fs-4" style={{ color: 'red' }} />
                </div>
                <div className="img">
                    <img src="" className="card-img p-2" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text opacity-50">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                <div className="d-flex w-100 border-0">
                    <button className="btn border-0 py-2 rounded-0 fw-medium" style={{ backgroundColor: '#dfae63', color: 'white', width: '200px' }}>
                        Buy now
                    </button>
                    <div className="bg-light d-flex align-items-center justify-content-center px-3 border-start fw-bold" style={{ width: '200px', backgroundColor: '#e9ecef !important' }}>
                        85$
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SanPham