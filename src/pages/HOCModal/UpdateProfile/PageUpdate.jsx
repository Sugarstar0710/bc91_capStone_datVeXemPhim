import React from 'react'

const PageUpdate = () => {
    return (
        <div className="container mt-4" style={{ maxWidth: 500 }}>
            <form>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="vumailinh.bh025@gmail.com" />
                </div>
                {/* Name */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Linh Vu" />
                </div>
                {/* Phone */}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" />
                </div>
                {/* Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                {/* Gender */}
                <div className="mb-3">
                    <label className="form-label d-block">Gender</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="male" defaultValue="true" />
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="female" defaultValue="false" defaultChecked />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default PageUpdate