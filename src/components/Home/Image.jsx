import React from 'react'

const Image = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel ">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <img src="https://cdn.hstatic.net/files/1000230642/file/1920x750_.png" className="d-block w-100" style={{height:'900px'}} alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <img src="https://file.hstatic.net/1000230642/collection/bitis_web_banner_litedash_dbc2fc041b1a433ab2c168b55e16a401.png" className="d-block w-100" style={{height:'900px'}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn2.tuoitre.vn/471584752817336320/2024/10/16/base64-17290555616061401325355.png" className="d-block w-100" style={{height:'900px'}} alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default Image