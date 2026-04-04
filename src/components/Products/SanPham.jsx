import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { themGioHang } from '../../redux/reducer/BTGioHangReducer'
import { history } from '../../main'
import { notification } from 'antd';

const SanPham = (props) => {
    const { userLogin } = useSelector(rootState => rootState.UserLoginReducer)
    const [api, contextHolder] = notification.useNotification();
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
    const { mangSanPham } = props
    const dispatch = useDispatch()
    return (
        <div className="row g-4">
            {contextHolder}
            {mangSanPham.map((sanPham, index) => {
                return <div className="col-md-4" key={sanPham.id}>
                    <div className="card border-0 shadow-sm h-100" >
                        <div className="position-relative overflow-hidden bg-light" style={{ minHeight: 240 }}>
                            <img
                                src={sanPham.image}
                                className="w-100 h-100"
                                style={{ objectFit: 'contain' }}
                            />
                            <span
                                className='position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle bg-white text-dark border border-2 border-secondary'
                                style={{ width: 40, height: 40 }}
                            >
                                <i className="fa-solid fa-heart text-danger"></i>
                            </span>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title mb-1">{sanPham.name}</h5>
                            <p className="text-muted small mb-4">{sanPham.shortDescription}</p>
                            <div className="d-flex align-items-center justify-content-between mt-auto">
                                <div className="d-flex gap-2">
                                    <NavLink to={`/detail/${sanPham.id}`} className="btn btn-outline-secondary px-2 py-3" style={{ fontSize: 16 }}>View detail</NavLink>
                                    <button className="btn btn-warning btn-sm px-3 py-3 " style={{ fontSize: 16 }} onClick={(e) => {
                                        handleBuyNow(sanPham)
                                    }}>Buy now</button>
                                </div>
                                <span className="badge bg-danger text-white py-3 px-3" style={{ fontSize: 16 }}>${sanPham.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>

    )
}

export default SanPham