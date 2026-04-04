import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGioHang, giamSoLuong, tangSoLuong } from '../redux/reducer/BTGioHangReducer'
import ModalEditGioHang from './HOCModal/ModalEditGioHang'
import { changeContentDrawerAction } from '../redux/reducer/DrawerContainerReducer'
import EditGioHang from './EditGioHang'
import { notification, Button } from 'antd';
import { history } from '../main'
const GioHang = () => {
  const { gioHang } = useSelector(rootState => rootState.BTGioHangReducer)
  const dispatch = useDispatch()
  const tinhTong = () => {
    return gioHang.reduce((tong, sp) => {
      return tong + (sp.price * sp.soLuong)
    }, 0).toLocaleString()
  }
  const { userLogin } = useSelector(rootState => rootState.UserLoginReducer)
  // Khởi tạo notification
  const [api, contextHolder] = notification.useNotification();

  // Kiểm tra đăng nhập ngay khi vào trang (Mounting)
  useEffect(() => {
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
    }
  }, [userLogin]); // Chạy lại nếu trạng thái login thay đổi

  if (!userLogin) {
    return (
      <div className="container py-5 text-center">
        {contextHolder}
        <h3>Bạn cần đăng nhập để xem nội dung này!</h3>
      </div>
    )
  }
  return (
    <div className="container py-5">
      {contextHolder}
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
                <th scope="col">ID</th>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {gioHang.map((item, index) => {
                return <tr >
                  <th scope="row">{item.id}</th>
                  <td>
                    <img
                      src={item.image}
                      alt="Product 1"
                      className="rounded"
                      style={{ width: 60, height: 60, objectFit: 'cover' }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className='text-center'>
                    <div className="d-flex justify-content-center">
                      <div className="input-group" style={{ width: 140 }}>
                        <button className="btn btn-outline-secondary" type="button"
                          onClick={(e) => {
                            const action = giamSoLuong({
                              id: item.id,
                              amount: 1
                            })
                            dispatch(action)
                          }}>-</button>
                        <input type="text" className="form-control text-center" value={item.soLuong} />
                        <button className="btn btn-outline-secondary" type="button" onClick={(e) => {
                          const action = tangSoLuong({
                            id: item.id,
                            amount: 1
                          })
                          dispatch(action)
                        }}>+</button>
                      </div>
                    </div>
                  </td>
                  <td>$ {(item.price * item.soLuong).toLocaleString()}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={(e) => {
                      const action = changeContentDrawerAction({
                        title: 'Edit sản phẩm',
                        contentComponent: <EditGioHang />
                      })
                      dispatch(action)
                    }}
                    >Edit</button>
                    <button className="btn btn-sm btn-danger" type="button" onClick={(e) => {
                      const action = deleteGioHang(item.id)
                      dispatch(action)
                    }}>Delete</button>
                  </td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr className="table-light">
                <td colSpan="5" className='text-center fs-5 fw-bold text-danger '>Tổng cộng:</td>
                <td className="fw-semibold">$ {tinhTong()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <ModalEditGioHang />
    </div>
  )
}

export default GioHang