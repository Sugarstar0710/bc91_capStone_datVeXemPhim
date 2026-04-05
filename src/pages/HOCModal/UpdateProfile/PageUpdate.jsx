import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeFunctionSubmit, setUpdateSuccess, updateProfileActionApiAsync } from '../../../redux/reducer/UserLoginReducer'
import { useEffect } from 'react'


const PageUpdate = () => {
    const { userProfile, updateSuccess } = useSelector(rootState => rootState.UserLoginReducer)
    const dispatch = useDispatch()
    const userUpdateFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: userProfile?.email || '',
            name: userProfile?.name || '',
            phone: userProfile?.phone || '',
            password: userProfile?.password || '',
            gender: userProfile?.gender === true ? 'true' : 'false'
        },
        onSubmit: (values) => {
            const payload = {
                ...values,
                gender: values.gender === 'true'
            }
            const action = updateProfileActionApiAsync(payload)
            dispatch(action)
        }
    });
    useEffect(() => {
        dispatch(changeFunctionSubmit(userUpdateFormik.handleSubmit));
    }, [userUpdateFormik.values]);
    useEffect(() => {
        if (updateSuccess) {
            const btnClose = document.querySelector('#exampleModal .btn-close');
            if (btnClose) {
                btnClose.click(); 
            }
            dispatch(setUpdateSuccess(false));
        }
    }, [updateSuccess])
    return (
        <div className="container mt-4" style={{ maxWidth: 500 }}>
            <form id="formUpdateProfile" onSubmit={userUpdateFormik.handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='email' value={userUpdateFormik.values.email} onInput={userUpdateFormik.handleChange} />
                </div>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={userUpdateFormik.values.name} onInput={userUpdateFormik.handleChange} />
                </div>
                {/* Phone */}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" name='phone' id="phone" value={userUpdateFormik.values.phone} onInput={userUpdateFormik.handleChange} />
                </div>
                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' id="password" value={userUpdateFormik.values.password} onInput={userUpdateFormik.handleChange} />
                </div>
                {/* Gender */}
                <div className="mb-3">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" value="true" checked={userUpdateFormik.values.gender === 'true'} onChange={userUpdateFormik.handleChange} />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" value="false" checked={userUpdateFormik.values.gender === 'false'} onChange={userUpdateFormik.handleChange} />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default PageUpdate