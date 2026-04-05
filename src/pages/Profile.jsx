import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { getProfileActionApiAsync } from '../redux/reducer/UserLoginReducer'
import ModalUpdate from './HOCModal/ModalUpdate'
import PageUpdate from './HOCModal/UpdateProfile/PageUpdate'
import { useState } from 'react'
import { history } from '../main'
import { notification, Button } from 'antd';
const Profile = () => {
    const [Component, setComponent] = useState(<PageUpdate />)
    const dispatch = useDispatch()
    const { userProfile, userLogin } = useSelector(rootState => rootState.UserLoginReducer)
    const [api, contextHolder] = notification.useNotification();
    if (!userLogin) {
        return (
            <div className="container py-5 text-center">
                {contextHolder}
                <h3>Bạn cần đăng nhập để được xem chi tiết profile!</h3>
            </div>
        )
    }
    const formFormikUserProfile = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userProfile?.email || '',
            name: userProfile?.name || '',
            phone: userProfile?.phone || '',
            password: userProfile?.password || '',
            gender: userProfile?.gender === true ? 'true' : 'false'
        }, onSubmit: (values) => {

        }
    })
    useEffect(() => {
        if (userLogin) {
            const actionThunk = getProfileActionApiAsync()
            dispatch(actionThunk)
        } else {
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
            })
        }
    }, [userLogin])
    return (
        <div className="container mt-5 bg-light shadow-sm p-0">
            {contextHolder}
            <div className="d-inline-block px-5 py-2 fw-bold text-white fs-4" style={{ background: 'linear-gradient(to right, #9d00ff, #4e00ff)', minWidth: 300 }}>
                Profile
            </div>
            <div className="p-4">
                <div className="row mb-5">
                    <div className="col-4 text-center">
                        <img src={userProfile?.avatar} alt="avatar" className='rounded-circle border' width={200} height={200} />
                    </div>
                    <div className="col-8">
                        <form onSubmit={formFormikUserProfile.handleSubmit}>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group mb-2">
                                        <p className="mb-1">Email</p>
                                        <input className="form-control" name='email' value={formFormikUserProfile.values.email} onChange={formFormikUserProfile.handleChange} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <p className="mb-1">Phone</p>
                                        <input className="form-control" name='phone' value={formFormikUserProfile.values.phone} onChange={formFormikUserProfile.handleChange} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-2">
                                        <p className="mb-1">Name</p>
                                        <input className="form-control" name='name' value={formFormikUserProfile.values.name} onChange={formFormikUserProfile.handleChange} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <p className="mb-1">Password</p>
                                        <input className="form-control" name='password' type='password' value={formFormikUserProfile.values.password} onChange={formFormikUserProfile.handleChange} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <p className="mb-1">Gender</p>
                                        <div className="d-flex gap-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderMale" value="true" checked={formFormikUserProfile.values.gender === 'true'} onChange={formFormikUserProfile.handleChange} />
                                                <label className="form-check-label" htmlFor="genderMale">Male</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="false" checked={formFormikUserProfile.values.gender === 'false'} onChange={formFormikUserProfile.handleChange} />
                                                <label className="form-check-label" htmlFor="genderFemale">Female</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-end mt-3'>
                                <button type='submit' className='btn btn-primary rounded-pill px-4' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => {
                                    setComponent(<PageUpdate />)
                                }}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ModalUpdate title='Chỉnh sửa Profile' contentComponent={Component} />

                <div className="d-flex border-bottom mb-4">
                    <div className="px-4 py-2 border-bottom border-3 border-danger text-danger fw-bold" style={{ cursor: 'pointer' }}>Order history</div>
                </div>

                <div className="order-list">
                    {userProfile?.ordersHistory?.map((order, index) => {
                        return (
                            <div className="mb-5" key={order.id}>
                                <p className="text-danger fw-semibold mb-2">
                                    + Orders have been placed on {new Date(order.date).toLocaleDateString()}
                                </p>
                                <div className="table-responsive">
                                    <table className="table align-middle text-center border">
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
                                            {order.orderDetail?.map((item, itemindex) => {
                                                return (
                                                    <tr key={itemindex}>
                                                        <td>{order.id}</td>
                                                        <td><img src={item.image} width={50} alt="shoe" /></td>
                                                        <td className="text-primary fw-bold">{item.name}</td>
                                                        <td>${item.price.toLocaleString()}</td>
                                                        <td>{item.quantity}</td>
                                                        <td className="fw-bold">${(item.price * item.quantity).toLocaleString()}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile