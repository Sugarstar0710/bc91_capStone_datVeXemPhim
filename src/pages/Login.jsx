import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react';
import { loginActionApiAsync } from '../redux/reducer/UserLoginReducer';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch= useDispatch()
    const userLoginForm = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('Email cannot be blank!').matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Email is invalid - Ex: abc@gmail.com'),
            password: yup.string().required('Password cannot be blank!').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+= \[\{\]\};:\'\" ,<>\/?\\|`~]).{8,}$/, 'Password must: \n\n\n- Be at least 8 characters\n- Include 1 uppercase letter\n- Include 1 number\n- Include 1 special character'
            ),
        }), onSubmit: (valueForm) => {
            const action= loginActionApiAsync(valueForm)
            dispatch(action)
        }
    })
    return (
        <div className="container mt-5">
            <div className="card p-5 shadow-sm border-0" style={{ maxWidth: 800, margin: 'auto' }}>
                <div className="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
                    <div>
                        <h1 className="fw-bold mb-0">Login</h1>
                        <div style={{ height: 4, width: 50, backgroundColor: '#6200ee', marginTop: 5 }} />
                    </div>
                    <p className="text-muted small mb-0">Access your account</p>
                </div>
                <form onSubmit={userLoginForm.handleSubmit}>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-uppercase text-secondary">Email</label>
                            <input type="email" name="email" className="form-control bg-light border-0 py-2" placeholder="Enter your email" onInput={userLoginForm.handleChange} value={userLoginForm.values.email} />
                            <p className="text-danger mt-1" style={{ fontSize: 16 }}>{userLoginForm.errors.email}</p>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small fw-bold text-uppercase text-secondary">Password</label>
                            <div style={{ position: 'relative' }}>
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="form-control bg-light border-0 py-2 pe-5"
                                    placeholder="Enter your password"
                                    value={userLoginForm.values.password}
                                    onChange={userLoginForm.handleChange}
                                />

                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                                    onClick={(e) => setShowPassword(!showPassword)}
                                    style={{position: 'absolute',
                                    right: '15px',top: '50%',
                                    transform: 'translateY(-50%)',cursor: 'pointer', color: '#6c757d', zIndex: 10}}
                                ></i>
                            </div>
                            <p className="text-danger small mt-1" style={{ fontSize: 16}}>{userLoginForm.errors.password}</p>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <button type="submit" className="btn btn-primary px-5 py-2 fw-bold text-uppercase shadow-sm" style={{ backgroundColor: '#6200ee', border: 'none', minWidth: 200, borderRadius: 4 }}>
                            Submit
                        </button>

                        <div>
                            <div className="my-3 text-muted small text-uppercase">Hoặc</div>
                            <button type="button" className="btn btn-primary d-flex align-items-center justify-content-center mx-auto py-3 px-3 shadow-sm" style={{ backgroundColor: '#1877F2', border: 'none', minWidth: 250, borderRadius: 50 }}>
                                <i className="fab fa-facebook me-2 fs-4" />
                                <span className="small fw-semibold">Continue with Facebook</span>
                            </button>
                        </div>


                        <p className="mt-4 fs-5 text-muted">
                            Don't have an account? <NavLink to='/register' className="text-decoration-none fw-bold" style={{ color: '#6200ee' }}>Sign Up</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login