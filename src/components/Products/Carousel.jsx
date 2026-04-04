import React from 'react'
import { NavLink } from 'react-router-dom'
import { themGioHang } from '../../redux/reducer/BTGioHangReducer'
import { useDispatch, useSelector } from 'react-redux'
import { notification } from 'antd';

const Carousel = (props) => {
  const { mangSanPham } = props
  const dispatch= useDispatch()
  const [api, contextHolder] = notification.useNotification();
  const { userLogin } = useSelector(rootState => rootState.UserLoginReducer)
  const handleBuyNow = (sanPham) => {
          if (!userLogin) {
              api.warning({
                  message: <span style={{ fontSize: 20, fontWeight: 'bold' }}>Yêu cầu đăng nhập</span>,
                  description: <div style={{ fontSize: 18 }}>
                    Bạn cần phải đăng nhập tài khoản để thực hiện mua sản phẩm này.
                </div>,
                  placement: 'topRight', 
                  duration: 0, 
                  btn: (
                      <button className="btn btn-primary btn-sm" style={{ padding: '8px 20px', fontSize: 16 }} onClick={() => {
                            api.destroy(key); // Đóng thông báo hiện tại
                            history.push('/login'); // Chuyển hướng sang trang login
                          }}>Login Now
                      </button>
                  ),
              });
              return;
          }
          const action = themGioHang(sanPham)
          dispatch(action)
      }
  return (
    <div id="productCarousel" className="carousel slide mb-5 mt-2" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators mb-0 d-flex justify-content-center gap-2 py-3">
        <button
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#000', border: 'none' }}
        ></button>
        <button
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#000', border: 'none' }}
        ></button>
        <button
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#000', border: 'none' }}
        ></button>
      </div>

      <div className="carousel-inner rounded-4 overflow-hidden shadow-sm">
        {contextHolder}
        {mangSanPham.slice(0, 3).map((sanPham, index) => {
          return <div className={`carousel-item ${index == 0 ? 'active' : ''}`} key={sanPham.id}>
            <div className="row g-0 align-items-center">
              <div className="col-md-6">
                <img
                  src={sanPham.image}
                  className="d-block w-75 ms-5"
                  alt={sanPham.name}
                  style={{ height: 420, objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-6">
                <h1 className="mb-2">{sanPham.name}</h1>
                <p className="text-muted mb-3 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae purus vitae dolor vehicula euismod.</p>
                <div className="mb-3 " style={{ fontSize: 18 }}>
                  <span className="badge bg-secondary me-2 px-2 py-2" >Size:</span>
                  <span className="badge bg-secondary me-2 px-2 py-2">38</span>
                  <span className="badge bg-secondary me-2 px-2 py-2">39</span>
                  <span className="badge bg-secondary me-2 px-2 py-2">40</span>
                  <span className="badge bg-secondary px-2 py-2">41</span>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="fs-2 fw-bold text-danger">${sanPham.price}</span>
                </div>
                <NavLink to={`/detail/${sanPham.id}`} className="btn btn-outline-secondary me-2 px-2 py-3 fs-5">View Detail</NavLink>
                <button type="button" className="btn btn-warning px-3 py-3 fs-5" onClick={(e) => {
                  handleBuyNow(sanPham)
                }}>Buy now</button>
              </div>
            </div>
          </div>
        })}
      </div>

      {/* <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  )
}

export default Carousel
