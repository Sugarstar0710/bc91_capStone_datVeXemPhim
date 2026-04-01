import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
          <div className="row px-5 mx-auto text-center">
              <div className="col-md-4 ps-5 mt-2">
                  <h6 className="fw-bold text-uppercase mb-3">GET HELP</h6>
                  <ul className="list-unstyled">
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Home</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Nike</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Adidas</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Contact</a></li>
                  </ul>
              </div>
              <div className="col-md-4 ps-5 mt-2 border-start border-secondary-subtle">
                  <h6 className="fw-bold text-uppercase mb-3">SUPPORT</h6>
                  <ul className="list-unstyled">
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">About</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Contact</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Help</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">Phone</a></li>
                  </ul>
              </div>
              <div className="col-md-4 ps-5 mt-2 border-start border-secondary-subtle">
                  <h6 className="fw-bold text-uppercase mb-3">REGISTER</h6>
                  <ul className="list-unstyled">
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">register</a></li>
                      <li className="mb-2"><a href="#" className="text-decoration-none text-dark fw-bold">login</a></li>
                  </ul>
              </div>
          </div>
          <div className="py-4 text-center" style={{ backgroundColor: '#d9d9d9' }}>
              <p className="mb-0 text-dark fw-medium fs-5">
                  © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
              </p>
          </div>
    </div>
  )
}

export default Footer