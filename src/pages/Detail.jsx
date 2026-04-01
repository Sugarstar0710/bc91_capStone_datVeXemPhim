import React from 'react'

const Detail = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-4">
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1618354697910-6d32f25e9a27?auto=format&fit=crop&w=600&q=80"
              className="card-img-top"
              alt="Product detail"
              style={{ objectFit: 'contain', height: 420 }}
            />
          </div>
        </div>

        <div className="col-lg-7">
          <div className="pb-3 border-bottom mb-4">
            <h2 className="mb-3">Product name</h2>
            <p className="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores pariatur sequi esse ducimus veritatis aspernatur totam inventore, tempore nam impedit illum qui a quae aperiam officia, error explicabo rerum nisi! (Thực tinh Description)</p>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase text-secondary mb-3">Available size</h6>
            <div className="d-flex flex-wrap gap-2">
              <button type="button" className="btn btn-outline-secondary btn-sm">38</button>
              <button type="button" className="btn btn-outline-secondary btn-sm">39</button>
              <button type="button" className="btn btn-outline-secondary btn-sm">40</button>
              <button type="button" className="btn btn-outline-secondary btn-sm">41</button>
              <button type="button" className="btn btn-outline-secondary btn-sm">42</button>
            </div>
          </div>

          <div className="d-flex align-items-center gap-4 mb-4">
            <div>
              <span className="fs-4 fw-bold text-danger">85$</span>
            </div>
            <div className="input-group" style={{ width: 140 }}>
              <button className="btn btn-outline-secondary" type="button">-</button>
              <input type="text" className="form-control text-center" value="1" readOnly />
              <button className="btn btn-outline-secondary" type="button">+</button>
            </div>
          </div>

          <button type="button" className="btn btn-primary px-4">Add to cart</button>
        </div>
      </div>

      <div className="mt-5">
        <h5 className="mb-4 text-center">- Realate Product -</h5>
        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1618354697910-6d32f25e9a27?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Related product"
                  style={{ objectFit: 'contain', height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">Adidas Prophere</h6>
                  <p className="text-muted small mb-4">short descript ...</p>
                  <div className="mt-auto d-flex align-items-center justify-content-between">
                    <div className="d-flex gap-2">
                      <button className="btn btn-outline-secondary btn-sm">View detail</button>
                      <button className="btn btn-warning btn-sm">Buy now</button>
                    </div>
                    <span className="badge bg-dark text-white py-2 px-3">85$</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Detail