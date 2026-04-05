import React from 'react'
import { useSelector } from 'react-redux'

const EditGioHang = () => {

    return (
        <div className="container mt-5">
            <div className="card shadow border-0 mx-auto" style={{ maxWidth: 600, borderRadius: 20 }}>
                <div className="card-body">
                    <form >
                        {/* ID */}
                        <div className="mb-3">
                            <label className="form-label">ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder="Enter product ID"
                                value=''
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter product name"
                                value=''
                                
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                placeholder="Enter price"
                                value=''
                               
                            />
                        </div>

                        {/* Quantity */}
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="quantity"
                                placeholder="Enter quantity"
                                value=''
                                
                            />
                        </div>

                        {/* Short Description */}
                        <div className="mb-3">
                            <label className="form-label">Short Description</label>
                            <input
                                type="text"
                                className="form-control"
                                name="shortDescription"
                                placeholder="Short description"
                                value=''
                               
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                name="description"
                                rows="3"
                                placeholder="Full description"
                                value=''
                                
                            />
                        </div>

                        {/* Image Link */}
                        <div className="mb-3">
                            <label className="form-label">Image Link</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imgLink"
                                placeholder="Image URL"
                                value=''
                                
                            />
                        </div>

                        {/* Submit */}
                        <button type="submit" className="btn btn-primary w-100">
                            Update Product
                        </button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default EditGioHang