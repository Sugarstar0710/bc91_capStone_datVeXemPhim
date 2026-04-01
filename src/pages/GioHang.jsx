import React from 'react'

const GioHang = () => {
  return (
    <div className="container py-5">
      <div className="d-flex flex-row align-items-center justify-content-between gap-3 mb-5 rounded-4 p-4" style={{ background: 'linear-gradient(90deg, #8f27ff 0%, #ff3476 100%)' }}>
        <div>
          <h3 className="mb-1 text-white fw-bold">Giỏ hàng</h3>
          <p className="text-white-50 mb-0">Kiểm tra sản phẩm bạn đã chọn trước khi thanh toán.</p>
        </div>
        <button className="btn btn-warning">Submit Order</button>
      </div>

      <div className="card shadow-sm border-0 text-center">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img
                    src="https://images.unsplash.com/photo-1618354697910-6d32f25e9a27?auto=format&fit=crop&w=120&q=80"
                    alt="Product 1"
                    className="rounded"
                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                  />
                </td>
                <td>Product 1</td>
                <td>1,000 VND</td>
                <td className='text-center'>
                  <div className="d-flex justify-content-center">
                    <div className="input-group" style={{ width: 140 }}>
                      <button className="btn btn-outline-secondary" type="button">-</button>
                      <input type="text" className="form-control text-center" value="1" readOnly />
                      <button className="btn btn-outline-secondary" type="button">+</button>
                    </div>
                  </div>
                </td>
                <td>1,000 VND</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" type="button">Edit</button>
                  <button className="btn btn-sm btn-danger" type="button">Delete</button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="table-light">
                <td colSpan="5" className='text-center fs-5 fw-bold text-danger '>Tổng cộng:</td>
                <td className="fw-semibold">1,000 VND</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GioHang