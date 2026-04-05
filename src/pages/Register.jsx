import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { regiterActionApiAsync } from '../redux/reducer/UserLoginReducer'
import { useDispatch } from 'react-redux'
const Register = () => {
  const dispatch= useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConFirm, setShowPasswordConFirm] = useState(false)
  const userRegisterForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Email cannot be blank!").matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Email is invalid - Ex: abc@gmail.com'),
      password: yup.string().required('Password cannot be blank!').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+= \[\{\]\};:\'\" ,<>\/?\\|`~]).{8,}$/, 'Password must: \n\n\n- Be at least 8 characters\n- Include 1 uppercase letter\n- Include 1 number\n- Include 1 special character'),
      name: yup.string().required('Name cannot be blank!'),
      phone: yup.string().required('Phone number is required!').matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    }),
    onSubmit: (valuesForm) => {
      const action = regiterActionApiAsync(valuesForm)
      dispatch(action)
    }
  })

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card shadow-sm border-0 overflow-hidden">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                <div>
                  <h1 className="h3 fw-bold mb-2">Register</h1>
                  <div className="border-bottom border-3 border-primary w-25"></div>
                </div>
                <p className="text-muted mb-0">Create your account</p>
              </div>

              <form onSubmit={userRegisterForm.handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6 border-md-end">
                    <div className="mb-4">
                      <label className="form-label text-uppercase fw-semibold">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg bg-light" style={{ fontSize: 18 }}
                        name="email"
                        placeholder="email"
                        value={userRegisterForm.values.email}
                        onInput={userRegisterForm.handleChange}
                      />
                      <div className="form-text text-danger">{userRegisterForm.errors.email}</div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-uppercase small fw-semibold">Password</label>
                      <div style={{ position: 'relative' }}>
                        <input type={showPassword ? "text" : "password"}
                          name="password"
                          className="form-control bg-light border-0 py-2 pe-5"
                          placeholder="Enter your password" 
                          value={userRegisterForm.values.password}
                          onChange={userRegisterForm.handleChange}
                        />

                        <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}
                          onClick={(e) => setShowPassword(!showPassword)}
                          style={{
                            position: 'absolute',
                            right: '15px', top: '50%',
                            transform: 'translateY(-50%)', cursor: 'pointer', color: '#6c757d', zIndex: 10
                          }}
                        ></i>
                      </div>
                      <div className="form-text text-danger">{userRegisterForm.errors.password}</div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-uppercase small fw-semibold">Password confirm</label>
                      <div style={{ position: 'relative' }}>
                        <input type={showPasswordConFirm ? "text" : "password"}
                          name="password"
                          className="form-control bg-light border-0 py-2 pe-5"
                          placeholder="Enter your password"
                        />

                        <i className={`fa ${showPasswordConFirm ? 'fa-eye-slash' : 'fa-eye'}`}
                          onClick={(e) => setShowPasswordConFirm(!showPasswordConFirm)}
                          style={{
                            position: 'absolute',
                            right: '15px', top: '50%',
                            transform: 'translateY(-50%)', cursor: 'pointer', color: '#6c757d', zIndex: 10
                          }}
                        ></i>
                      </div>
                      <div className="form-text text-danger">{userRegisterForm.errors.confirmPassword}</div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-4">
                      <label className="form-label text-uppercase small fw-semibold">Name</label>
                      <input
                        type="text" style={{ fontSize: 16 }}
                        className="form-control form-control-lg bg-light"
                        name="name"
                        placeholder="name"
                        value={userRegisterForm.values.name}
                        onInput={userRegisterForm.handleChange}
                      />
                      <div className="form-text text-danger">{userRegisterForm.errors.name}</div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-uppercase small fw-semibold">Phone</label>
                      <input
                        type="text" style={{ fontSize: 16 }}
                        className="form-control form-control-lg bg-light"
                        name="phone"
                        placeholder="phone"
                        onInput={userRegisterForm.handleChange}
                        value={userRegisterForm.values.phone}
                      />
                      <div className="form-text text-danger">{userRegisterForm.errors.phone}</div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-uppercase small fw-semibold d-block mb-3">Gender</label>
                      <div className="d-flex gap-4">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderMale"
                            value="true"
                            checked={userRegisterForm.values.gender === true} onChange={() => userRegisterForm.setFieldValue("gender", true)}
                          ></input>
                          <label className="form-check-label" htmlFor="genderMale">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="genderFemale"
                            value="false" checked={userRegisterForm.values.gender === false}
                            onChange={() => userRegisterForm.setFieldValue("gender", false)}
                          />
                          <label className="form-check-label" htmlFor="genderFemale">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2"
                    style={{ backgroundColor: '#6200ee', borderColor: '#6200ee' }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register